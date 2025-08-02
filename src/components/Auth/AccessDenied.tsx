import { SignInButton } from '@clerk/nextjs'
import { Lock, MapPin } from 'lucide-react'
import Image from 'next/image'

export function AccessDenied() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <Image
            src="https://www.bytestechnolab.com/wp-content/uploads/2023/11/Exploring-Mapbox_-A-Powerful-Mapping-Solution-with-React.js.webp"
            alt="Ilustração de mapa com pin de localização"
            width={1920}
            height={1080}
            className="w-48 h-48 mx-auto mb-6 drop-shadow-lg"
          />
          <div className="absolute -top-2 -right-2 bg-[#6c47ff] rounded-full p-2 shadow-lg">
            <Lock className="w-5 h-5 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Acesso Restrito</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Você precisa estar logado para acessar o mapa e explorar todas as funcionalidades.
        </p>

        <SignInButton>
          <button className="group bg-[#6c47ff] hover:bg-[#5a3de8] text-white rounded-full px-8 py-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto">
            <MapPin className="w-5 h-5 group-hover:animate-bounce" />
            Entrar
          </button>
        </SignInButton>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Após fazer login, você terá acesso a:</p>
          <ul className="grid grid-cols-1 gap-3 text-sm text-gray-600">
            <li>• Mapas interativos em alta resolução</li>
            <li>• Ferramentas de navegação avançadas</li>
            <li>• Salvamento de localizações favoritas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}