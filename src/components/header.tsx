import { Button } from "@/components/ui/button"
import { MenuIcon, Navigation } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-9">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href={'/'}>
          <div className="flex gap-2 items-center text-primary font-bold text-xl">
            <Navigation className="h-6 w-6" />
            <span>LottApp</span>
          </div>
        </Link>

        <div className="hidden  md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-4">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Recursos
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Preço
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Como Funciona
            </Link>
            <Button size="sm">Começar Agora</Button>
          </nav>
        </div>
        <div className="md:hidden flex-1 items-end justify-end space-x-4">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}


const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="" asChild>
        <MenuIcon size={40} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b px-4 py-6">
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex-grow">
          <ul className="space-y-1 pb-4 pt-2 text-sm px-9">
            <NavItemMobile href={'/features'} title={'Recursos'} />
            <NavItemMobile href={'/pricing'} title={'Preços'} />
            <NavItemMobile href={'/how-it-works'} title={'Como Funciona'} />
          </ul>
        </nav>
        {/* <SheetFooter className="border-t p-4">
          <p className="text-sm text-gray-500">
            &copy; 2024 ARC SPORTS, Inc rights reserved
          </p>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}

const NavItemMobile = ({ href, title }: { href: string, title: string }) => {
  return (
    <li>
      <SheetClose asChild>
        <Link
          className='inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-8 py-2 text-base font-medium tracking-tighter text-white hover:bg-emerald-700'

          href={href}
        >
          {' '}
          {title}
        </Link>
      </SheetClose>
    </li>
  )
}


