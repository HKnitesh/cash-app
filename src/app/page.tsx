import Cover from "./components/Cover"
import Payments from "./components/Payments"
import Banking from "./components/Banking"

export default function Home() {
  return (
    <main className=" flex flex-col w-full  ">
      <Cover />
      <Payments />
      <Banking />
    </main>
  )
}
