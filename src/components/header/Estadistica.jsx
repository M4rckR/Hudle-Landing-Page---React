import PropTypes from 'prop-types'

export const Estadistica = ({amount,icon,message}) => {
  return (
    <article className='flex flex-col gap-1'>
        <img className='w-10' src={icon} alt="svg comunidades" />
        <p className='font-m-poppins font-bold text-5xl text-m-dark-cyan md:text-6xl'>{amount}+</p>
        <p className='text-m-dark-cyan'>{message}</p>
    </article>
  )
}


Estadistica.propTypes = {
    amount: PropTypes.string,
    icon: PropTypes.string,
    message: PropTypes.string,
}