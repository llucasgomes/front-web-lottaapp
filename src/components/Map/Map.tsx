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
import { getSocket } from '@/service/socket-io'
import { useUser } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { useUserLocation } from './useUserLocation'

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme() // ← Tema do sistema/claro/escuro
  const map = useRef<mapboxgl.Map | null>(null)

  const { location: userLocation } = useUserLocation()
  const [otherUsers, setOtherUsers] = useState<User[]>([])

  const { user } = useUser()
  console.log(otherUsers)

  // Inicializa o mapa só uma vez
  useEffect(() => {
      // Inicializa o mapa quando a localização do usuário estiver disponível
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

  // Envia localização a cada 10 segundos e atualiza outros motoristas
 useEffect(() => {
    if (!user || !userLocation) return

    const socket = getSocket()

    // Recebe lista atualizada de motoristas
  socket.on('location:all', (lista: any[]) => {
    const outros = lista
      .filter((m) => m.id !== user.id)
      .map((m) => ({
        id: m.id,
        name: m.nome,
        coords: [m.longitude, m.latitude] as [number, number],
      }))
    setOtherUsers(outros)
  })

  // Envia localização a cada 10s
  const interval = setInterval(() => {
    
    socket.emit('motorista:location', {
      id: user.id,
      nome: user.fullName || 'Sem Nome',
      latitude: userLocation[1],
      longitude: userLocation[0],
      rota: 'Leste',
    })
  }, 10_000)

    // Envia uma vez logo de cara
  socket.emit('motorista:location', {
    id: user.id,
    nome: user.fullName || 'Sem Nome',
    latitude: userLocation[1],
    longitude: userLocation[0],
    rota: 'Leste',
  })

 

    return () => {
      clearInterval(interval)
      socket.off('motoristas_online')
    }
  }, [user, userLocation])


  return <div ref={mapContainer} className="fixed inset-0 w-full h-screen" />
}