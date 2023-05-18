import { Banner } from "./Banner"
import { SeparatorLogo } from "./SeparatorLogo"
import { GenericTitle } from "./GenericTitle"
import { ItemCardList } from "./ItemCardList.jsx"
import { Faqs } from "./Faqs"
import { SecuritySectionBanner } from "./SecuritySectionBanner"

export const Main = ({ children }) => {
  return (
    <>
      <main className="my-2 bg-c-fondo w-full h-auto flex flex-col gap-10">
        <Banner />
        <SeparatorLogo />
        <GenericTitle title="Te simplificamos el trabajo!" />
        <ItemCardList />
        <SecuritySectionBanner />
        <GenericTitle title="¿Que mas debo saber?"/>
        <Faqs />
        {children}
      </main>
    </>
  )
}
