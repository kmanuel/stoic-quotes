import aureliusQuotes from '../data/aurelius_quotes.json'
import senecaQuotes from '../data/seneca_quotes.json'
import epictetusQuotes from '../data/epictetus_quotes.json'
import { AsyncStorage } from 'react-native'

export type IQuote = {
  id: number
  author: string
  text: string
  favorite: boolean
  lastSeen: Date | undefined
}

const QUOTES_KEY = '@quotes'

export const saveQuotes = (quotes: IQuote[]) => {
  AsyncStorage.setItem(QUOTES_KEY, JSON.stringify(quotes))
}

export const loadQuotes = async (): Promise<IQuote[]> => {
  const loadedQuotes = await AsyncStorage.getItem(QUOTES_KEY)
  if (loadedQuotes) {
    const parsedQuotes = JSON.parse(loadedQuotes) as IQuote[]
    return parsedQuotes.sort(
      (a, b) =>
        ((a.lastSeen && new Date(a.lastSeen).getTime()) || 0) -
        ((b.lastSeen && new Date(b.lastSeen).getTime()) || 0)
    )
  }

  const quoteObjs = [...aureliusQuotes, ...senecaQuotes, ...epictetusQuotes]
    .map((q) => {
      return {
        item: {
          ...q,
          favorite: false,
          lastSeen: null,
        },
        sort: Math.random(),
      }
    })
    .sort((a, b) => a.sort - b.sort)
    .map((a, idx) => {
      return { id: idx, ...a.item }
    })

  saveQuotes(quoteObjs)
  return quoteObjs
}

let loadedQuotes: Array<IQuote>

export const loadQuote = async (id: number) => {
  const quotes = await loadQuotes()
  return quotes.find((q) => q.id === id)
}

export const favoriteQuote = async (id: number) => {
  addFavoriteId(id)
}

const addFavoriteId = async (id: number) => {
  const favoriteIds = await loadFavoriteIds()
  return AsyncStorage.setItem(
    '@favorites',
    JSON.stringify([id, ...favoriteIds])
  )
}

const loadFavoriteIds = async () => {
  const favorites = await AsyncStorage.getItem('@favorites')
  if (!favorites) {
    return []
  }
  const favoriteIds = JSON.parse(favorites)
  return favoriteIds
}

export const loadFavorites = async (): Promise<IQuote[]> => {
  const quotes = await loadQuotes()
  const favoriteIds = await loadFavoriteIds()
  return quotes.filter((q) => favoriteIds.includes(q.id))
}

export const setQuoteLastSeen = async (quoteId: number) => {
  const quotes = await loadQuotes()
  const quoteIndex = quotes.findIndex((q) => q.id === quoteId)
  quotes[quoteIndex].lastSeen = new Date()
  saveQuotes(quotes)
}

export const hardReset = () => {
  console.log('performing hard reset')
  AsyncStorage.removeItem(QUOTES_KEY)
}
