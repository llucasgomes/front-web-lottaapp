import {
  BarChart,
  Clock,
  Compass,
  LineChart,
  MapPin,
  Shield,
  Smartphone,
  Truck,
  Users,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecursosPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Recursos Completos para Motoristas de Microônibus
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça todas as ferramentas que o LottApp oferece para otimizar seu trabalho diário e aumentar sua
                produtividade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="rotas" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="rotas">Rotas</TabsTrigger>
                <TabsTrigger value="monitoramento">Monitoramento</TabsTrigger>
                <TabsTrigger value="analise">Análise</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="rotas" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Seleção Inteligente de Rotas</h2>
                  <p className="text-muted-foreground">
                    Nossa tecnologia de mapeamento avançada permite que você escolha as melhores rotas com base em
                    diversos fatores como tráfego, demanda de passageiros e horários de pico.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Visualização clara de todas as rotas disponíveis em sua região</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Filtros por distância, tempo estimado e potencial de passageiros</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sugestões personalizadas com base no seu histórico de rotas</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Rotas alternativas em caso de congestionamentos ou bloqueios</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Interface de seleção de rotas do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardHeader>
                    <Compass className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Navegação em Tempo Real</CardTitle>
                    <CardDescription>GPS integrado com atualizações constantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Navegue com confiança usando nosso sistema GPS que atualiza em tempo real, mostrando condições
                      de tráfego e alertas importantes durante seu percurso.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Pontos de Parada Otimizados</CardTitle>
                    <CardDescription>Locais estratégicos para maximizar passageiros</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Identifique os melhores pontos de parada com base em dados históricos de demanda de passageiros,
                      aumentando sua eficiência e rentabilidade.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Truck className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Gestão de Frota</CardTitle>
                    <CardDescription>Coordenação entre múltiplos veículos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Para empresas com múltiplos veículos, nossa plataforma permite coordenar toda a frota,
                      distribuindo rotas de forma eficiente entre os motoristas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="monitoramento" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="rounded-lg overflow-hidden border order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Interface de monitoramento em tempo real do LottApp"
                    className="w-full object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h2 className="text-3xl font-bold">Monitoramento em Tempo Real</h2>
                  <p className="text-muted-foreground">
                    Acompanhe todos os aspectos da sua rota enquanto dirige, com atualizações instantâneas sobre
                    tráfego, outros veículos e potenciais problemas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Visualização do tempo estimado até o próximo ônibus na mesma rota</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Alertas de congestionamento e incidentes na via</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Estimativa de passageiros em cada ponto de parada</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Comunicação direta com outros motoristas na mesma rota</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardHeader>
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Cronômetro Inteligente</CardTitle>
                    <CardDescription>Controle preciso do tempo entre paradas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mantenha-se no horário com nosso cronômetro que ajuda a controlar o tempo entre paradas,
                      garantindo um serviço pontual e confiável para seus passageiros.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Previsão de Passageiros</CardTitle>
                    <CardDescription>Estimativas baseadas em dados históricos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Antecipe a demanda com nossa tecnologia de previsão que estima o número de passageiros em cada
                      ponto com base em dados históricos e eventos locais.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Alertas Instantâneos</CardTitle>
                    <CardDescription>Notificações sobre mudanças na rota</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Receba alertas em tempo real sobre acidentes, bloqueios, condições climáticas ou qualquer fator
                      que possa afetar sua rota, permitindo ajustes rápidos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analise" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Análise de Desempenho</h2>
                  <p className="text-muted-foreground">
                    Transforme dados em insights acionáveis com nossas ferramentas de análise avançada, que ajudam a
                    identificar padrões e oportunidades de melhoria.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Relatórios detalhados sobre consumo de combustível e eficiência</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Comparação de desempenho entre diferentes rotas e períodos</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Identificação de horários mais rentáveis para cada rota</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sugestões personalizadas para otimização de rotas</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Dashboard de análise de desempenho do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardHeader>
                    <BarChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Estatísticas Detalhadas</CardTitle>
                    <CardDescription>Métricas completas sobre seu desempenho</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Acesse estatísticas detalhadas sobre distância percorrida, tempo em rota, número de passageiros,
                      consumo de combustível e muito mais.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <LineChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Tendências e Padrões</CardTitle>
                    <CardDescription>Identificação de oportunidades de melhoria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nossa análise avançada identifica tendências e padrões em seus dados, ajudando a tomar decisões
                      mais inteligentes sobre quais rotas priorizar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Relatórios Móveis</CardTitle>
                    <CardDescription>Acesso a dados em qualquer lugar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Acesse seus relatórios de desempenho diretamente do seu smartphone, permitindo análises rápidas
                      mesmo quando estiver longe do computador.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Depoimentos de Motoristas
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Veja o que outros motoristas estão dizendo sobre o LottApp
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">JC</span>
                  </div>
                  <div>
                    <CardTitle>João Carlos</CardTitle>
                    <CardDescription>Motorista há 8 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "O LottApp mudou completamente minha rotina de trabalho. Consigo escolher as melhores rotas e
                  economizo pelo menos 1 hora por dia evitando congestionamentos."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">MS</span>
                  </div>
                  <div>
                    <CardTitle>Maria Silva</CardTitle>
                    <CardDescription>Motorista há 5 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "A função de monitoramento em tempo real é incrível! Consigo ver exatamente quando o último ônibus
                  passou e ajustar meu ritmo para maximizar o número de passageiros."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">AR</span>
                  </div>
                  <div>
                    <CardTitle>Antônio Rodrigues</CardTitle>
                    <CardDescription>Motorista há 12 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Os relatórios de desempenho me ajudaram a identificar que estava gastando combustível demais em
                  certas rotas. Após ajustes, economizo cerca de R$300 por mês!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para experimentar todos esses recursos?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comece hoje mesmo e transforme a maneira como você gerencia suas rotas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Começar Agora</Button>
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
