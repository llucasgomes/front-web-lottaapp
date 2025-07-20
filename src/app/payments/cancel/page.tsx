import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RefreshCw, XCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentFailed() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-800">Pagamento Não Concluído</CardTitle>
          <CardDescription className="text-red-600 text-base">
            Houve um problema ao processar sua transação
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Possíveis causas:</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Dados do cartão incorretos</li>
              <li>• Saldo insuficiente</li>
              <li>• Problema na conexão</li>
              <li>• Cartão bloqueado ou vencido</li>
            </ul>
          </div>

          <div className="text-center space-y-3">
            <p className="text-gray-600 text-center text-sm">
              Não foi possível processar seu pagamento. Verifique seus dados e tente novamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/" className="flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Link>
              </Button>
              <Button asChild className="flex-1 bg-red-600 hover:bg-red-700">
                <Link href="/payment" className="flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Tentar Novamente
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
