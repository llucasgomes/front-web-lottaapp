import { Check, X } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PrecosPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planos e Preços Acessíveis</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Escolha o plano ideal para suas necessidades e comece a otimizar suas rotas hoje mesmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="mensal" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="mensal">Mensal</TabsTrigger>
                <TabsTrigger value="anual">Anual (Economize 20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mensal" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Plano Básico</CardTitle>
                    <CardDescription>Para motoristas iniciantes</CardDescription>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      R$30
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Acesso a todas as rotas disponíveis</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Monitoramento básico em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Relatórios semanais de desempenho</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Previsão avançada de passageiros</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Suporte prioritário</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Análise avançada de rotas</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assinar Plano Básico</Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col border-primary relative">
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Mais Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Plano Profissional</CardTitle>
                    <CardDescription>Para motoristas experientes</CardDescription>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      R$40
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Acesso a todas as rotas disponíveis</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Monitoramento avançado em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Relatórios diários de desempenho</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Previsão avançada de passageiros</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Suporte prioritário</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Análise avançada de rotas</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assinar Plano Profissional</Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Plano Premium</CardTitle>
                    <CardDescription>Para frotas e empresas</CardDescription>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      R$60
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Acesso a todas as rotas disponíveis</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Monitoramento avançado em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Relatórios personalizados de desempenho</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Previsão avançada de passageiros</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Suporte prioritário 24/7</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Análise avançada de rotas</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assinar Plano Premium</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="anual" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Plano Básico</CardTitle>
                    <CardDescription>Para motoristas iniciantes</CardDescription>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      R$24
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Faturado anualmente como R$288</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Acesso a todas as rotas disponíveis</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Monitoramento básico em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Relatórios semanais de desempenho</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Previsão avançada de passageiros</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Suporte prioritário</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Análise avançada de rotas</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assinar Plano Básico</Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col border-primary relative">
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Mais Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Plano Profissional</CardTitle>
                    <CardDescription>Para motoristas experientes</CardDescription>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      R$32
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Faturado anualmente como R$384</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Acesso a todas as rotas disponíveis</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Monitoramento avançado em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Relatórios diários de desempenho</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Previsão avançada de passageiros</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Suporte prioritário</span>
                      </li>
                      <li className="flex items-center">
                        <X className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Análise avançada de rotas</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assinar Plano Profissional</Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Plano Premium</CardTitle>
                    <CardDescription>Para frotas e empresas</CardDescription>
                    <div className="mt-4 flex items-baseline text-6xl font-bold">
                      R$48
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Faturado anualmente como R$576</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Acesso a todas as rotas disponíveis</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Monitoramento avançado em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Relatórios personalizados de desempenho</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Previsão avançada de passageiros</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Suporte prioritário 24/7</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Análise avançada de rotas</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assinar Plano Premium</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comparação de Recursos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Veja em detalhes o que cada plano oferece
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left font-medium">Recursos</th>
                  <th className="py-4 px-6 text-center font-medium">Básico</th>
                  <th className="py-4 px-6 text-center font-medium">Profissional</th>
                  <th className="py-4 px-6 text-center font-medium">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">Acesso a rotas</td>
                  <td className="py-4 px-6 text-center">Ilimitado</td>
                  <td className="py-4 px-6 text-center">Ilimitado</td>
                  <td className="py-4 px-6 text-center">Ilimitado</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Monitoramento em tempo real</td>
                  <td className="py-4 px-6 text-center">Básico</td>
                  <td className="py-4 px-6 text-center">Avançado</td>
                  <td className="py-4 px-6 text-center">Avançado</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Relatórios de desempenho</td>
                  <td className="py-4 px-6 text-center">Semanais</td>
                  <td className="py-4 px-6 text-center">Diários</td>
                  <td className="py-4 px-6 text-center">Personalizados</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Previsão de passageiros</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Suporte técnico</td>
                  <td className="py-4 px-6 text-center">Horário comercial</td>
                  <td className="py-4 px-6 text-center">Prioritário</td>
                  <td className="py-4 px-6 text-center">24/7</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Análise avançada de rotas</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">Gestão de frota</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">API para integração</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Perguntas Frequentes</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tire suas dúvidas sobre nossos planos e preços
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Posso mudar de plano a qualquer momento?</AccordionTrigger>
                <AccordionContent>
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em
                  vigor imediatamente, e o valor será ajustado proporcionalmente ao tempo restante da sua assinatura
                  atual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Existe um período de teste gratuito?</AccordionTrigger>
                <AccordionContent>
                  Sim, oferecemos um período de teste gratuito de 7 dias para todos os planos. Você pode experimentar
                  todos os recursos sem compromisso e decidir qual plano melhor atende às suas necessidades.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Como funciona o pagamento?</AccordionTrigger>
                <AccordionContent>
                  Aceitamos pagamentos via cartão de crédito, boleto bancário e PIX. Para planos mensais, a cobrança é
                  feita mensalmente na data de assinatura. Para planos anuais, o valor total é cobrado no momento da
                  assinatura.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Posso cancelar minha assinatura a qualquer momento?</AccordionTrigger>
                <AccordionContent>
                  Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Para planos mensais,
                  o acesso permanece até o final do período pago. Para planos anuais, não oferecemos reembolso
                  proporcional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Existe um plano para empresas com várias frotas?</AccordionTrigger>
                <AccordionContent>
                  Sim, para empresas com mais de 10 veículos, oferecemos planos personalizados com preços especiais.
                  Entre em contato com nossa equipe de vendas para obter uma proposta personalizada para sua empresa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>O aplicativo funciona offline?</AccordionTrigger>
                <AccordionContent>
                  O aplicativo requer conexão com a internet para funcionar corretamente, pois depende de dados em
                  tempo real. No entanto, algumas funcionalidades básicas, como visualização de rotas já baixadas,
                  podem funcionar offline.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ainda tem dúvidas?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa equipe está pronta para ajudar você a escolher o plano ideal para suas necessidades.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Fale com um Consultor</Button>
              <Button size="lg" variant="outline">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
