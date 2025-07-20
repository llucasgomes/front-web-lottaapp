import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">Pagamento Concluído!</CardTitle>
          <CardDescription className="text-green-600 text-base">
            Sua transação foi processada com sucesso
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center space-y-3">
            <p className="text-gray-600 text-center">
              Seu pagamento foi processado com sucesso! Obrigado pela sua compra.
            </p>

            <div className="pt-4">
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="lottapp://(auth)/sign-in" className="flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
