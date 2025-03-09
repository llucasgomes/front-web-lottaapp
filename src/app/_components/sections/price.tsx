import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export const Price = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preço acessível para todos</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Invista em sua produtividade com um valor que cabe no seu bolso.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-md py-12">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Plano Mensal</h3>
              <p className="text-sm text-muted-foreground">Acesso completo a todas as funcionalidades</p>
            </div>
            <div className="p-6 pt-0">
              <div className="flex items-baseline text-6xl font-bold">
                R$40
                <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  <span>Acesso ilimitado a todas as rotas</span>
                </li>
                <li className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  <span>Monitoramento em tempo real</span>
                </li>
                <li className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  <span>Relatórios de desempenho</span>
                </li>
                <li className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  <span>Suporte técnico 24/7</span>
                </li>
              </ul>
              <Button className="mt-6 w-full">Assinar Agora</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}