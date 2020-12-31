export interface post {
  id: number,
  title: string, 
  price: number, 
  location: string, 
  latitude: number,
  longitude: number,
  images: string, 
  text: string, 
  link: string,
  group?: { 
    id: number, 
    name: string
  }
}
export interface graphRes {
  data?: { posts: [post] } | null
  errors?: any
}