import { Suspense } from "react"
import Cards from "./components/cards/Cards"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import type { Icard } from "./typs/card"
import Footer from "./components/Footer"

const cardsPromise = async (): Promise<Icard[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {
  // console.log(cardsPromise)
  return (
    <>
      <Nav />

      <Hero />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards cardsPromise={cardsPromise()} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
