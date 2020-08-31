import React, { createContext, useEffect, useState } from 'react'
import { IQuote, loadQuotes, saveQuotes } from '../services/quoteService'

type ContextProps = {
  quotes: IQuote[]
  favorites: IQuote[]
  toggleFavorite: (id: number) => void
}

export const QuotesContext = createContext<ContextProps | undefined>(undefined)

const QuotesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<IQuote[]>([])
  const [quotes, setQuotes] = useState<IQuote[]>([])

  useEffect(() => {
    loadQuotes().then(setQuotes)
  }, [])

  useEffect(() => {
    const favorites = quotes.filter((q) => q.favorite)
    setFavorites(favorites)
    saveQuotes(quotes)
  }, [quotes])

  const toggleFavorite = async (id) => {
    const quoteIdx = quotes.findIndex((q) => q.id === id)
    const newQuotes = [...quotes]
    newQuotes[quoteIdx].favorite = !newQuotes[quoteIdx].favorite
    setQuotes(newQuotes)
    // setFavorites((prev) => [quotes[quoteIdx], ...prev])
  }

  return (
    <QuotesContext.Provider value={{ quotes, favorites, toggleFavorite }}>
      {children}
    </QuotesContext.Provider>
  )
}

export default QuotesContextProvider
