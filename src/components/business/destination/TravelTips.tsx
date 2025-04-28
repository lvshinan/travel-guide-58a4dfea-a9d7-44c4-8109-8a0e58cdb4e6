import { Card } from '@/components/ui/card'

interface Tip {
  id: string
  title: string
  content: string
}

interface TravelTipsProps {
  tips: Tip[]
}

export function TravelTips({ tips }: TravelTipsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">实用贴士</h2>
      <div className="grid gap-4">
        {tips.map((tip) => (
          <Card key={tip.id} className="p-4">
            <h3 className="text-lg font-semibold">{tip.title}</h3>
            <p className="mt-2 text-muted-foreground">{tip.content}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
