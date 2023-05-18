import { DropDownMenu } from "../components/DropDownMenu";
import { MoneyOnAccount } from "../components/MoneyOnAccount";
import CardsAdd from "../components/CardsAdd";
export const Home = ({ children }) => {
  return (
    <>
      <div className="bg-[#EAEEF7]">
        <MoneyOnAccount></MoneyOnAccount>
        {/* <DropDownMenu></DropDownMenu> */}
        <CardsAdd></CardsAdd>
      </div>
    </>
  );
};
