import { Banner } from '../components/Banner'
import { SeparatorLogo } from '../components/SeparatorLogo'
import { GenericTitle } from '../components/GenericTitle'
import { ItemCardList } from '../components/ItemCardList.jsx'
import { Faqs } from '../components/Faqs'

export const Main = ({ children }) => {
  return (
    <>
      <main className="my-2 bg-c-fondo w-full h-auto flex flex-col gap-10">
        <Banner />
        <SeparatorLogo />
        <GenericTitle title="Te simplificamos el trabajo!" />
        <ItemCardList />
        <GenericTitle title="¿Qué más debo saber?" />
        <Faqs />
        {children}
      </main>
    </>
  )
}
