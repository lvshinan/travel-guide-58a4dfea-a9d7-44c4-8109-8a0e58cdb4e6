export interface Destination {
  id: string
  name: string
  description: string
  imageUrl: string
  season: string
  transportation: {
    type: string
    description: string
  }[]
  accommodation: {
    type: string
    description: string
  }[]
  attractions: {
    id: string
    name: string
    description: string
    imageUrl: string
  }[]
  food: {
    id: string
    name: string
    description: string
    imageUrl: string
  }[]
  tips: {
    id: string
    title: string
    content: string
  }[]
  reviews: {
    id: string
    userName: string
    content: string
    rating: number
    date: string
  }[]
}
