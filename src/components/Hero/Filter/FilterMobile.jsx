import { Filter } from 'lucide-react';
import { useFilterStore } from '../../../store/useFilterStore.js';

const FilterMobile = () => {
  const {toggleFilterModal} = useFilterStore();

  return (
    <section className='md:hidden flex justify-start items-center gap-2 overflow-x-auto'>
        <button 
          className='flex justify-center items-center gap-2 border border-gray-300
          rounded-full px-2 py-1'
          onClick={() => toggleFilterModal(true)}
        >
          <p>Filters</p>
          <Filter />
        </button>

        <button 
          className='border border-gray-300 rounded-full px-2 py-1'
          onClick={() => toggleFilterModal(true)}
        >
          Profile
        </button>

        <button 
          className='border border-gray-300 rounded-full px-2 py-1'
          onClick={() => toggleFilterModal(true)}
        >
          Location
        </button>

        <button 
          className='border border-gray-300 rounded-full px-2 py-1'
          onClick={() => toggleFilterModal(true)}
        >
          Stipend
        </button>

        <button 
          className='border border-gray-300 rounded-full px-2 py-1'
          onClick={() => toggleFilterModal(true)}
        >
          Duration
        </button>
    </section>
  )
}

export default FilterMobile