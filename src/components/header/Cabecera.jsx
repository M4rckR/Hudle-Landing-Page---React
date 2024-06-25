

export const Cabecera = () => {
  return (
    <section className="contenedor-general">
        <nav className="flex items-center justify-between">
            <img className="w-36" src="/img/logo.svg" alt="logo" />
            <a className="text-m-pink border rounded-xl border-m-pink py-1 px-4 hover:bg-m-pink transition-all duration-300 hover:text-white" href="#">Try it free</a>
        </nav>
    </section>
  )
}
