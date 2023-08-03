import Cover from "./components/Cover"
import Payments from "./components/Payments"
import Banking from "./components/Banking"
import CashCard from "./components/CashCard"
import Investing from "./components/Investing"

export default function Home() {

  
  return (
    <main className=" flex flex-col w-full  ">
      <Cover />
      <Payments />
      <Banking />
      <CashCard />
      <Investing />
    </main>
  )
}
