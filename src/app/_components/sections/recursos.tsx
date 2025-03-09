import { Badge } from "@/components/ui/badge"
import { BarChart, Clock, MapPin } from "lucide-react"
import { RecursoCard } from "./recursos-card"

export const Recursos = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Recursos
            </Badge>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tudo que você precisa para gerenciar suas rotas
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa plataforma foi desenvolvida pensando nas necessidades dos motoristas de microônibus.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <RecursoCard
            Icon={MapPin}
            title="Seleção de Rotas"
            description="Visualize e escolha as melhores rotas disponíveis para maximizar sua eficiência."
          />
          <RecursoCard
            Icon={Clock}
            title="Monitoramento em Tempo Real"
            description="Acompanhe o tempo das rotas à sua frente e ajuste seu cronograma conforme necessário."
          />
          <RecursoCard
            Icon={BarChart}
            title="Análise de Desempenho"
            description="Obtenha relatórios detalhados sobre seu desempenho e identifique oportunidades de melhoria."
          />
        </div>
      </div>
    </section>
  )
}