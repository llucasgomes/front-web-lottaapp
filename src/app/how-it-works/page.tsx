import { ArrowRight, Headphones, Laptop, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComoFuncionaPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como o LottApp Funciona</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Entenda como nossa plataforma pode transformar sua experiência como motorista de microônibus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:gap-24">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h2 className="text-3xl font-bold">Cadastro e Configuração</h2>
                  <p className="text-muted-foreground">
                    Comece criando sua conta e configurando seu perfil com informações sobre seu veículo e
                    preferências de rotas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Crie sua conta em menos de 2 minutos</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Configure seu perfil com informações do seu veículo</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Defina suas preferências de rotas e horários</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Tela de cadastro do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="rounded-lg overflow-hidden border order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Tela de seleção de rotas do LottApp"
                    className="w-full object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h2 className="text-3xl font-bold">Seleção de Rotas</h2>
                  <p className="text-muted-foreground">
                    Visualize todas as rotas disponíveis em sua região e escolha a que melhor se adapta às suas
                    necessidades, com base em distância, tempo e potencial de passageiros.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Veja todas as rotas disponíveis em um mapa interativo</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Filtre por distância, duração e potencial de lucro</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Receba sugestões personalizadas com base no seu histórico</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h2 className="text-3xl font-bold">Monitoramento em Tempo Real</h2>
                  <p className="text-muted-foreground">
                    Durante sua rota, acompanhe informações em tempo real sobre tráfego, outros veículos e estimativas
                    de passageiros.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Visualize o tempo estimado até o próximo ônibus</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Receba alertas sobre congestionamentos e incidentes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ajuste sua velocidade para otimizar o fluxo de passageiros</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Tela de monitoramento em tempo real do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="rounded-lg overflow-hidden border order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Tela de análise de desempenho do LottApp"
                    className="w-full object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h2 className="text-3xl font-bold">Análise de Desempenho</h2>
                  <p className="text-muted-foreground">
                    Ao final do dia, analise seu desempenho com relatórios detalhados e identifique oportunidades de
                    melhoria.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Veja estatísticas detalhadas sobre suas rotas</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Compare seu desempenho com períodos anteriores</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Receba sugestões personalizadas para melhorar sua eficiência</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plataformas Disponíveis</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                O LottApp está disponível em múltiplas plataformas para atender às suas necessidades
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col items-center text-center">
                <Smartphone className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Aplicativo Móvel</CardTitle>
                <CardDescription>Disponível para Android e iOS</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Acesse todas as funcionalidades do LottApp diretamente do seu smartphone, com interface otimizada
                  para uso em movimento.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="Download na App Store"
                    className="h-10 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="Download no Google Play"
                    className="h-10 w-auto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center text-center">
                <Laptop className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Versão Web</CardTitle>
                <CardDescription>Acesse pelo navegador</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Utilize o LottApp em qualquer computador através do navegador, ideal para planejamento de rotas e
                  análise detalhada de relatórios.
                </p>
                <Button className="mt-6">Acessar Versão Web</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center text-center">
                <Headphones className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Suporte Dedicado</CardTitle>
                <CardDescription>Ajuda quando você precisar</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Nossa equipe de suporte está disponível para ajudar com qualquer dúvida ou problema que você possa
                  ter ao utilizar o LottApp.
                </p>
                <Button variant="outline" className="mt-6">
                  Contatar Suporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tecnologia por Trás do LottApp
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça as tecnologias avançadas que tornam nossa plataforma possível
              </p>
            </div>
          </div>

          <Tabs defaultValue="gps" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="gps">GPS Avançado</TabsTrigger>
                <TabsTrigger value="ia">Inteligência Artificial</TabsTrigger>
                <TabsTrigger value="dados">Big Data</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="gps" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Sistema de GPS de Alta Precisão</h3>
                  <p className="text-muted-foreground">
                    Utilizamos tecnologia GPS de última geração para garantir localização precisa e atualizações em
                    tempo real sobre condições de tráfego.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Precisão de localização de até 2 metros</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Atualizações a cada 5 segundos</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Integração com múltiplos sistemas de navegação</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Sistema GPS do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ia" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="rounded-lg overflow-hidden border order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Sistema de IA do LottApp"
                    className="w-full object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h3 className="text-2xl font-bold">Algoritmos de Inteligência Artificial</h3>
                  <p className="text-muted-foreground">
                    Nossa plataforma utiliza algoritmos avançados de IA para prever condições de tráfego, demanda de
                    passageiros e sugerir as melhores rotas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Previsão de tráfego com 85% de precisão</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Estimativa de demanda de passageiros por ponto e horário</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Aprendizado contínuo com base nos dados coletados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dados" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Análise de Big Data</h3>
                  <p className="text-muted-foreground">
                    Processamos milhões de pontos de dados diariamente para oferecer insights valiosos e melhorar
                    continuamente nossa plataforma.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Análise de padrões de tráfego históricos</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Identificação de tendências de demanda por região</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Otimização contínua de rotas com base em dados reais</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Análise de dados do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pronto para começar?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experimente o LottApp gratuitamente por 7 dias e transforme a maneira como você gerencia suas rotas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Começar Período Gratuito</Button>
              <Link href="/precos">
                <Button size="lg" variant="outline">
                  Ver Planos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
