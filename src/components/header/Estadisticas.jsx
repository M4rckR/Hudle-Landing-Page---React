import { Estadistica } from "./Estadistica"

export const Estadisticas = () => {
  return (
    <section className="contenedor-general my-12">
        <div className="flex flex-col items-center gap-8 md:gap-20 md:flex-row md:justify-center lg:justify-between lg:max-w-[800px] lg:mx-auto">
            <Estadistica 
                amount= '1.4k'
                icon= '/img/icon-communities.svg'
                message = 'Communities Formed'
                />
            <Estadistica 
                amount= '2.7m'
                icon= '/img/icon-messages.svg'
                message = 'Messages Sent'
                />
        </div>
    </section>
  )
}
