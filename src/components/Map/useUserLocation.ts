import { useEffect, useState } from 'react'

export function useUserLocation() {
  const [location, setLocation] = useState<[number, number] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalização não suportada no seu navegador')
      return
    }

    const watcherId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation([position.coords.longitude, position.coords.latitude])
        setError(null)
      },
      (error) => {
        console.error('Erro ao obter localização', error)
        setError('Não foi possível obter sua localização.')
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    )

    // Cleanup: parar de escutar quando componente desmontar
    return () => navigator.geolocation.clearWatch(watcherId)
  }, [])

  return { location, error }
}