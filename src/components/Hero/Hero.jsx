import Breadcrumb from './Breadcrumb.jsx'
import FilterDesktop from './Filter/FilterDesktop.jsx'

const Hero = () => {
  return (
    <section className='mt-5 w-full flex justify-center'>
      <section className='w-3/4'>
        <Breadcrumb />

        <FilterDesktop />
      </section>
    </section>
  )
}

export default Hero