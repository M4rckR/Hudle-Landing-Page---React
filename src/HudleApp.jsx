import { Cabecera } from "./components/header/Cabecera"
import { Estadisticas } from "./components/header/Estadisticas"
import { Hero } from "./components/header/Hero"
import { SeccionInfo } from "./components/main/SeccionInfo"


export const HudleApp = () => {
  return (
    <> 
      <Cabecera/>
      <Hero/>
      <Estadisticas/>
      <SeccionInfo/>
    </>
  )
}
