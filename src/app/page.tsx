import { Button } from "@/components/ui/button";
import { BarChart, Clock, MapPin, Shield } from "lucide-react";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex-1">
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
                alt="Imagem de um motorista usando o aplicativo RotaFácil"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Recursos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Tudo que você precisa para gerenciar suas rotas
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa plataforma foi desenvolvida pensando nas necessidades dos motoristas de microônibus.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Seleção de Rotas</h3>
              <p className="text-center text-muted-foreground">
                Visualize e escolha as melhores rotas disponíveis para maximizar sua eficiência.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Monitoramento em Tempo Real</h3>
              <p className="text-center text-muted-foreground">
                Acompanhe o tempo das rotas à sua frente e ajuste seu cronograma conforme necessário.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Análise de Desempenho</h3>
              <p className="text-center text-muted-foreground">
                Obtenha relatórios detalhados sobre seu desempenho e identifique oportunidades de melhoria.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    1
                  </div>
                  <div>
                    <strong>Selecione sua rota</strong> - Escolha entre as rotas disponíveis com base em horários e
                    demanda.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    2
                  </div>
                  <div>
                    <strong>Monitore o tempo</strong> - Veja quanto tempo falta para o próximo ônibus na mesma rota.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    3
                  </div>
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

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para otimizar suas rotas?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Junte-se a centenas de motoristas que já estão economizando tempo e combustível com nossa plataforma.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Começar Agora</Button>
              <Button size="lg" variant="outline">
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
