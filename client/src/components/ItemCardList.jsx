import { ItemCard } from './ItemCard'

const listServices = [
  {
    id:1,
    service: 'Vizualiza todas tus tarjetas en un solo lugar',
    name: 'cash',
    icon: 'wallet-outline',
    img1: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686024390/wallet/cardsvisual_adt5o2.png'
  },
  {
    id:2,
    service: 'Una Interfaz intuitiva para realizar transacciones',
    name: 'credit-card',
    icon: 'card-outline',
    img1: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686021098/wallet/Home-1_1_df3z89.svg'
  },
  {
    id:3,
    service: 'Transferencias rápidas y seguras',
    name: 'currency-dollar',
    icon: 'cash-outline',
    img1: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686021318/wallet/Monitor_XDR_dngqki.svg'
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
