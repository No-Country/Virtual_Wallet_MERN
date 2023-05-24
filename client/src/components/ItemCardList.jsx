import { ItemCard } from './ItemCard'

const listServices = [
  {
    id:1,
    service: 'Paga tus facturas sin moverte de tu casa',
    name: 'cash',
    icon: 'wallet-outline'
  },
  {
    id:2,
    service: 'Visualiza todas tus trajetas desde un solo lugar',
    name: 'credit-card',
    icon: 'card-outline'
  },
  {
    id:3,
    service: 'Transferencias rápidas y seguras',
    name: 'currency-dollar',
    icon: 'cash-outline'
  }
]

export const ItemCardList = () => {
  return (
    <section className="h-auto flex justify-center items-center p-7 sm:gap-14 gap-10 flex-wrap">
      {listServices.map((element) => {
        return <ItemCard key={element.id} element={element} />
      })}
    </section>
  )
}
