import { useEffect } from 'react'
import { useInternshipStore } from '../../store/useInternshipStore.js'
import Breadcrumb from './Breadcrumb.jsx'
import FilterDesktop from './Filter/FilterDesktop.jsx'
import FilterMobile from './Filter/FilterMobile.jsx'
import FilterModal from './Filter/FilterModal.jsx'
import InternshipCard from '../Internship/InternshipCard.jsx'

const Hero = () => {
  const {
    isFilterModalVisible, 
    internshipData, 
    fetchAllInternships
  } = useInternshipStore();

  useEffect(() => {
    fetchAllInternships();
  }, []);

  return (
    <section className='mt-5 w-full flex justify-center'>
      <section className='w-3/4'>
        <Breadcrumb />

        <div className='hidden md:grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start'>
          <FilterDesktop />
          <InternshipCard data={internshipData['65381']} />
        </div>

        <FilterMobile />

        <FilterModal />
      </section>
    </section>
  )
}

export default Hero