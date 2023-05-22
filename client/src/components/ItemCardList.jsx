import { ItemCard } from './ItemCard'

const listServices = [
  {
    service: 'Paga tus facturas sin moverte de tu casa ',
    name: 'cash',
    icon: 'wallet-outline'
  },
  {
    service: 'Visualiza todoa tus trajetas desde un solo lugar ',
    name: 'credit-card',
    icon: 'card-outline'
  },
  {
    service: 'Transferencias rápidas y seguras',
    name: 'currency-dollar',
    icon: 'cash-outline'
  }
]

export const ItemCardList = () => {
  return (
    <section className="w-full h-auto flex justify-center p-7 sm:gap-14 gap-10 flex-wrap">
      {listServices.map((element) => {
        return (
          <article key={element.id}>
            <ItemCard element={element} />
          </article>
        )
      })}
    </section>
  )
}
