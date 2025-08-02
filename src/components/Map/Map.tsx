'use client'

import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import { useMapMarkers } from './useMapMarkers'


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

type User = {
  id: string
  name: string
  coords: [number, number]
}

// Só um mock inicial
import { otherUsers as initialOtherUsers } from "@/mockup"
import { useTheme } from 'next-themes'
import { useUserLocation } from './useUserLocation'

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme() // ← Tema do sistema/claro/escuro
  const map = useRef<mapboxgl.Map | null>(null)

  const { location: userLocation } = useUserLocation()
  const [otherUsers] = useState<User[]>(initialOtherUsers)

  // Inicializa o mapa só uma vez
  useEffect(() => {
      // Inicializa o mapa **APENAS** quando userLocation estiver disponível
     if (map.current || !mapContainer.current || !userLocation) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: resolvedTheme === 'dark'
          ? 'mapbox://styles/mapbox/dark-v11'
          : 'mapbox://styles/mapbox/streets-v11',
      center: userLocation ?? [-43.1819, -22.9035],
      zoom: 15,
    })

    map.current.addControl(new mapboxgl.NavigationControl())
  }, [userLocation,resolvedTheme])

  // Usa hook custom para manipular marcadores
  useMapMarkers(map.current, userLocation, otherUsers)

  return <div ref={mapContainer} className="fixed inset-0 w-full h-screen" />
}