import { Button } from "@/components/ui/button";
import { Banner } from "./_components/sections/banner";
import { ComoFunciona } from "./_components/sections/como-funciona";
import { Price } from "./_components/sections/price";
import { Recursos } from "./_components/sections/recursos";



export default function Home() {
  return (
    <main className="flex-1">
      <Banner />

      <Recursos />

      <Price />

      <ComoFunciona />

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
