import { Button } from "@/components/ui/button"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./components/HomePage"

function App() {
  return (
    <div className="flex flex-col px-15  min-h-svh">
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App
