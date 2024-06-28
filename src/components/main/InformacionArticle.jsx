import PropTypes from 'prop-types'

export const InformacionArticle = ({title, description,image,wave,styleWave,reverse,background}) => {
  return (
    <article>

      {/* Wave Top */}
      <div className={`${wave===true && styleWave===1? "bg-top-mobile-1" : 
      wave===true && styleWave===2? "bg-top-mobile-2" : null }`}></div>

      {/* Contenido de la informacion */}
      <div className={`md:px-4 ${background} ${wave===false? "py-20": null} `}>
        <div className={`contenedor-general flex flex-col items-center text-m-dark-cyan text-center md:text-left leading-6 gap-4  md:gap-16 lg:w-[1100px]  ${reverse===true? "md:flex-row-reverse": "md:flex-row"}`}>
          <picture className={`md:w-1/2 flex ${reverse===false? null:"justify-end"}`}>
            <img className=' md:max-w-[350px] lg:w-full'  src={image} alt="ilustacion" />
          </picture>
          <div className='md:w-1/2'>
            <h4 className=' text-lg md:text-3xl mb-2'>{title}</h4>
            <p>{description}</p>
          </div>
        </div>   
      </div>
  
      {/* Wave Bottom */}
      <div className={`${wave===true && styleWave===1? "bg-bottom-mobile-1" : 
        wave===true && styleWave===2? "bg-bottom-mobile-2" : null}`}></div>
    </article>
  )
}

InformacionArticle.propTypes = {
  title       : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  image       : PropTypes.string.isRequired,
  wave        : PropTypes.bool.isRequired,
  styleWave   : PropTypes.number.isRequired,
  reverse     : PropTypes.bool.isRequired,
  background  : PropTypes.string.isRequired
}