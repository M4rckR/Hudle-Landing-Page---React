export const PieDePagina = () => {
  return (
    <footer>
        <div className="bg-[url('/img/bg-footer-top-mobile.svg')] md:bg-[url('/img/bg-footer-top-desktop.svg')] h-[88px] md:h-[182px] bg-no-repeat bg-cover"></div>
        <div className="bg-m-dark-cyan">
            <div className="contenedor-general flex flex-col gap-12 lg:gap-64 md:gap-20  md:flex-row justify-between text-white"> 
                <article  className=" flex flex-col gap-6 md:py-12 px-8">
                    <picture>
                        <img src="/img/logo-white.svg" alt="" />
                    </picture>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                    vestibulum a, ultrices quis sem.</p>
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/img/icon-phone.svg" alt="icono telefono" />
                            <p>Phone: +1-543-123-4567</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/img/icon-email.svg" alt="" />
                            <p>example@huddle.com</p>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col gap-2  md:py-12 px-8">
                    <h4 className="text-xl">NEWSLETTER</h4>
                    <p>  To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                    send you spam or pass on your email address</p>
                    <form className="flex flex-col gap-2 md:flex-row">
                        <input className="outline-none border-none rounded-lg py-2 text-black pl-4 lg:w-4/6" type="text" />
                        <button className="boton-2 self-end text-center lg:w-2/6">Subscribe</button>
                    </form>
                </article>
            </div>
        </div>
    </footer>
  )
}
