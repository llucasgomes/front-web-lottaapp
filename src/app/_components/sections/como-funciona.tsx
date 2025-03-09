import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const ComoFunciona = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como Funciona</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja como nossa plataforma pode ajudar no seu dia a dia como motorista.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <Image
            src="https://kzmoevxsx0tgudgqdbnz.lite.vusercontent.net//placeholder.svg?height=500&width=500"
            width={500}
            height={500}
            alt="Interface do aplicativo mostrando seleção de rotas"
            className="mx-auto rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Interface Intuitiva</h3>
              <p className="text-muted-foreground">
                Nossa interface foi projetada para ser fácil de usar, mesmo para quem não tem muita experiência com
                tecnologia.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Badge className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">1</Badge>
                <div>
                  <strong>Selecione sua rota</strong> - Escolha entre as rotas disponíveis com base em horários e
                  demanda.
                </div>
              </li>
              <li className="flex items-start">
                <Badge className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  2
                </Badge>
                <div>
                  <strong>Monitore o tempo</strong> - Veja quanto tempo falta para o próximo ônibus na mesma rota.
                </div>
              </li>
              <li className="flex items-start">
                <Badge className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  3
                </Badge>
                <div>
                  <strong>Otimize seu trabalho</strong> - Receba sugestões de rotas alternativas em caso de
                  congestionamento.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}