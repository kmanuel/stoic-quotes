export type IAuthor = {
  name: string
}

const imageSources = {
  'Marcus Aurelius': require('../../assets/Aurelius.jpg'),
  'Lucius Annaeus Seneca': require('../../assets/seneca.jpeg'),
  Epictetus: require('../../assets/epictetus.png'),
  'Zeno of Citium': require('../../assets/zeno.jpg'),
}

export const getPictureSource = (author: IAuthor) => {
  return imageSources[author.name]
}
