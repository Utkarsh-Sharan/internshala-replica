import { X } from 'lucide-react'
import FilterDesktop from './FilterDesktop'
import { useInternshipStore } from '../../../store/useInternshipStore'

const FilterModal = () => {
  const {isFilterModalVisible, toggleFilterModal} = useInternshipStore();

  if(!isFilterModalVisible) return null;

  return (
    <section className='md:hidden absolute inset-0 z-10 flex justify-center w-full 
    h-full bg-white'>
      <section className='relative w-3/4 pt-4'>
        <button className='absolute top-5 right-2 z-20' onClick={() => toggleFilterModal(false)} >
          <X />
        </button>

        <FilterDesktop />
      </section>
    </section>
  )
}

export default FilterModal