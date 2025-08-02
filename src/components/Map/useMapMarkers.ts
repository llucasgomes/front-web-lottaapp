import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react'

type User = {
  id: string
  name: string
  coords: [number, number]
}

export function useMapMarkers(
  map: mapboxgl.Map | null,
  userLocation: [number, number] | null,
  otherUsers: User[]
) {
  const userMarker = useRef<mapboxgl.Marker | null>(null)
  const otherMarkers = useRef<Map<string, mapboxgl.Marker>>(new Map())

  // Marcador do usuário
  useEffect(() => {
    if (!map || !userLocation) return

    if (!userMarker.current) {
      userMarker.current = new mapboxgl.Marker({ color: 'yellow' })
        .setLngLat(userLocation)
        .setPopup(new mapboxgl.Popup().setText('Você está aqui'))
        .addTo(map)
    } else {
      userMarker.current.setLngLat(userLocation)
    }
  }, [map, userLocation])

  // Marcadores dos outros usuários
  useEffect(() => {
    if (!map) return

    const currentIds = new Set(otherUsers.map((u) => u.id))

    // Remove marcadores que saíram da lista
    for (const [id, marker] of otherMarkers.current.entries()) {
      if (!currentIds.has(id)) {
        marker.remove()
        otherMarkers.current.delete(id)
      }
    }

    // Atualiza ou adiciona marcadores
    otherUsers.forEach((user) => {
      const existing = otherMarkers.current.get(user.id)
      if (existing) {
        existing.setLngLat(user.coords)
      } else {
        const marker = new mapboxgl.Marker({ color: 'blue' })
          .setLngLat(user.coords)
          .setPopup(new mapboxgl.Popup().setText(user.name))
          .addTo(map)
        otherMarkers.current.set(user.id, marker)
      }
    })
  }, [map, otherUsers])
}