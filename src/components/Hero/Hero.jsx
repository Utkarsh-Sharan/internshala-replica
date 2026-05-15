import { useFilterStore } from '../../store/useFilterStore.js'
import Breadcrumb from './Breadcrumb.jsx'
import FilterDesktop from './Filter/FilterDesktop.jsx'
import FilterMobile from './Filter/FilterMobile.jsx'
import FilterModal from './Filter/FilterModal.jsx'

const Hero = () => {
  const {isFilterModalVisible} = useFilterStore();

  return (
    <section className='mt-5 w-full flex justify-center'>
      <section className='w-3/4'>
        <Breadcrumb />

        <div className='hidden md:block'>
          <FilterDesktop />
        </div>

        <FilterMobile />

        <FilterModal />
      </section>
    </section>
  )
}

export default Hero