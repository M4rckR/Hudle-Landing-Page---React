export const Hero = () => {
  return (
    <section className="contenedor-general mt-6 md:mt-12 lg:mt-20">
        <div className="text-center flex flex-col items-center gap-6 mb-8 md:mb-14 lg:mb-18">
            <h1 className=" text-xl text-m-dark-cyan md:text-2xl lg:text-4xl">Build The Community Your Fans Will Love</h1>
            <p className="text-m-dark-cyan leading-5 text-sm max-w-96">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <a className="boton-1" href="#">Get Started For Free</a>
        </div>
        <picture className="flex justify-center">
            <img className="lg:max-w-[800px]" src="/img/screen-mockups.svg" alt="imagen hero"/>
        </picture>
    </section>
  )
}
