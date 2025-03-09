import { Navigation } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0 px-9">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex gap-2 items-center text-primary font-bold">
          <Navigation className="h-5 w-5" />
          <span>LottApp</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} LottApp. Todos os direitos reservados.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Termos
          </Link>
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Privacidade
          </Link>
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}