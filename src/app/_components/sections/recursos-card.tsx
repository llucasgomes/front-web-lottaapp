import { LucideIcon } from "lucide-react"


type RecursoCardProps = {
  title: string
  description: string
  Icon: LucideIcon
}

export const RecursoCard = ({ description, title, Icon }: RecursoCardProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">
        {description}
      </p>
    </div>
  )
}