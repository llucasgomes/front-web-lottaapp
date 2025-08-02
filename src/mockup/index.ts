// Exemplo: outros usuários/micro-ônibus (futuramente via WebSocket ou API)
export const otherUsers: {
  id: string
  name: string
  coords: [number, number]  // <-- define como tupla fixa
}[] = [
  { id: 'user1', name: 'Maria', coords: [-59.991288, -3.032151] }, 
  { id: 'user2', name: 'João', coords: [-59.988917,-3.032349 ] },
  { id: 'user3', name: 'Carlos', coords: [-59.988724, -3.032158] }, //[longitude, latitude]
]