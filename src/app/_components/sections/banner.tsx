import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Banner = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Gerencie suas rotas de microônibus com facilidade
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Escolha as melhores rotas, acompanhe o tempo em tempo real e otimize seu trabalho diário por apenas
                R$40 mensais.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Experimente Grátis</Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://kzmoevxsx0tgudgqdbnz.lite.vusercontent.net/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Imagem de um motorista usando o aplicativo LottApp"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}