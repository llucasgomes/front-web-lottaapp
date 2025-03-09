import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function SaibaMaisPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o LottApp</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça nossa história, missão e a equipe por trás da plataforma que está transformando o transporte
                urbano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="sobre" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="sobre">Sobre Nós</TabsTrigger>
                <TabsTrigger value="equipe">Nossa Equipe</TabsTrigger>
                <TabsTrigger value="contato">Contato</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sobre" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Nossa História</h2>
                  <p className="text-muted-foreground">
                    O LottApp nasceu da experiência real de motoristas de microônibus que enfrentavam diariamente os
                    desafios de gerenciar rotas em grandes cidades brasileiras.
                  </p>
                  <p className="text-muted-foreground">
                    Fundada em 2020 por um grupo de engenheiros de software e ex-motoristas, nossa empresa tem como
                    missão simplificar o trabalho dos profissionais do transporte urbano, oferecendo tecnologia
                    acessível e eficiente.
                  </p>
                  <p className="text-muted-foreground">
                    Hoje, o LottApp é utilizado por mais de 5.000 motoristas em todo o Brasil, ajudando a otimizar
                    rotas, economizar combustível e aumentar a rentabilidade do trabalho diário.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Equipe fundadora do LottApp"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-center">Nossa Missão e Valores</h2>
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Missão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Transformar o transporte urbano através de tecnologia acessível, melhorando a eficiência dos
                        motoristas e a qualidade do serviço para os passageiros.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Visão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ser a plataforma de referência para gerenciamento de rotas de transporte urbano em toda a
                        América Latina, contribuindo para cidades mais inteligentes e sustentáveis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Valores</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Inovação constante</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Simplicidade e acessibilidade</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Compromisso com resultados</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Responsabilidade social</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-center">Nosso Impacto</h2>
                <div className="grid gap-6 md:grid-cols-4 mt-8">
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-primary">5.000+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Motoristas ativos</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-primary">25</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Cidades atendidas</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-primary">15%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Economia média de combustível</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-primary">1.2M</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Passageiros beneficiados mensalmente</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="equipe" className="space-y-8">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold">Conheça Nossa Equipe</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Somos uma equipe diversificada de profissionais apaixonados por tecnologia e mobilidade urbana,
                  trabalhando juntos para criar soluções inovadoras.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        width={96}
                        height={96}
                        alt="Foto de Carlos Silva"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle>Carlos Silva</CardTitle>
                    <CardDescription>CEO & Co-fundador</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Ex-motorista de microônibus com 15 anos de experiência, Carlos identificou a necessidade de uma
                      solução tecnológica para os desafios do setor.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        width={96}
                        height={96}
                        alt="Foto de Ana Oliveira"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle>Ana Oliveira</CardTitle>
                    <CardDescription>CTO & Co-fundadora</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Engenheira de software com especialização em sistemas de geolocalização, Ana lidera o
                      desenvolvimento tecnológico da plataforma desde sua concepção.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        width={96}
                        height={96}
                        alt="Foto de Marcos Santos"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle>Marcos Santos</CardTitle>
                    <CardDescription>Diretor de Produto</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Com vasta experiência em UX/UI, Marcos garante que nossa plataforma seja intuitiva e fácil de
                      usar, mesmo para quem tem pouca familiaridade com tecnologia.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        width={96}
                        height={96}
                        alt="Foto de Juliana Costa"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle>Juliana Costa</CardTitle>
                    <CardDescription>Diretora de Operações</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Especialista em logística urbana, Juliana coordena as operações e parcerias estratégicas com
                      empresas de transporte e órgãos públicos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        width={96}
                        height={96}
                        alt="Foto de Roberto Almeida"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle>Roberto Almeida</CardTitle>
                    <CardDescription>Diretor de Marketing</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Com experiência em startups de mobilidade, Roberto lidera as estratégias de crescimento e
                      comunicação da empresa com o mercado.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto rounded-full overflow-hidden w-24 h-24 mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        width={96}
                        height={96}
                        alt="Foto de Fernanda Lima"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle>Fernanda Lima</CardTitle>
                    <CardDescription>Diretora de Atendimento</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Responsável por garantir a melhor experiência para nossos clientes, Fernanda lidera a equipe de
                      suporte e implementa processos de melhoria contínua.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-xl font-bold mb-4">Junte-se à Nossa Equipe</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Estamos sempre em busca de talentos apaixonados por tecnologia e mobilidade urbana. Confira nossas
                  vagas abertas e faça parte da revolução no transporte urbano.
                </p>
                <Button>Ver Vagas Abertas</Button>
              </div>
            </TabsContent>

            <TabsContent value="contato" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 items-start">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Entre em Contato</h2>
                    <p className="text-muted-foreground">
                      Estamos à disposição para responder suas dúvidas, receber sugestões ou discutir parcerias.
                      Preencha o formulário ou utilize um de nossos canais de atendimento.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. Paulista, 1000, 10º andar
                          <br />
                          Bela Vista, São Paulo - SP
                          <br />
                          CEP: 01310-100
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">E-mail</h3>
                        <p className="text-muted-foreground">
                          contato@rotafacil.com.br
                          <br />
                          suporte@rotafacil.com.br
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Telefone</h3>
                        <p className="text-muted-foreground">
                          +55 (11) 3456-7890
                          <br />
                          +55 (11) 98765-4321 (WhatsApp)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 9h às 13h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Envie uma Mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome</Label>
                          <Input id="nome" placeholder="Seu nome completo" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto</Label>
                        <Input id="assunto" placeholder="Assunto da mensagem" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <Textarea id="mensagem" placeholder="Digite sua mensagem" rows={5} />
                      </div>

                      <Button type="submit" className="w-full">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-center">Nossos Parceiros</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    width={160}
                    height={80}
                    alt="Logo Parceiro 1"
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    width={160}
                    height={80}
                    alt="Logo Parceiro 2"
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    width={160}
                    height={80}
                    alt="Logo Parceiro 3"
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    width={160}
                    height={80}
                    alt="Logo Parceiro 4"
                    className="h-12 w-auto"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Vamos Transformar o Transporte Urbano Juntos
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seja um motorista mais eficiente, economize tempo e combustível, e ofereça um serviço melhor para seus
                passageiros.
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
  )
}
