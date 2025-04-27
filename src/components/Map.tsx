'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Marker {
  position: [number, number]
  title: string
  description?: string
  icon: string
}

interface MapProps {
  center: [number, number]
  markers: Marker[]
  className?: string
}

export default function Map({ center, markers, className }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    // Initialize map
    mapInstance.current = L.map(mapRef.current).setView(center, 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance.current)

    // Add markers
    markers.forEach(marker => {
      L.marker(marker.position, {
        title: marker.title
      })
      .addTo(mapInstance.current!)
      .bindPopup(`<b>${marker.title}</b><br>${marker.description || ''}`)
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [center, markers])

  return <div ref={mapRef} className={`${className} w-full`} />
}