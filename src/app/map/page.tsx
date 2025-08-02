'use client'

import { AccessDenied } from '@/components/Auth/AccessDenied'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false })

export default function Mapa() {
  return (
    <div className="flex items-center justify-center h-screen">
  
      <SignedIn>
        <Map />
      </SignedIn>
      <SignedOut>
        <AccessDenied />
      </SignedOut>
    
    </div>
  );
}