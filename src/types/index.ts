export type MotoristaOnline = {
  id: string
  nome: string
  latitude: number
  longitude: number
  rota?: string
  timestamp?: number
}

export type User = {
  id: string
  name: string
  coords: [number, number]
}