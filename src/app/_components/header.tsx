import { Button } from "@/components/ui/button"
import { Navigation } from "lucide-react"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-9">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-primary font-bold text-xl">
          <Navigation className="h-6 w-6" />
          <span>LottApp</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-4">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Recursos
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Preço
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Como Funciona
            </Link>
            <Button size="sm">Começar Agora</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}