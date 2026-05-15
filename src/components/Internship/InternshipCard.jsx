import { Banknote, Calendar, ClockFading, MapPin, Rows4 } from 'lucide-react'
import ReactImg from "../../assets/react.svg";

const InternshipCard = ({data}) => {
  return (
    <article className='w-full rounded-lg border border-gray-300 shadow-md p-2 flex 
      flex-col items-start gap-4 cursor-pointer transform transition-transform duration-200
      ease-in-out hover:scale-105 hover:shadow-lg'>
      <article className='flex w-full justify-between items-center'>
          <div className='text-base'>
              <p className='font-semibold'>{data.title}</p>

              <p className='text-gray-400 font-medium'>{data.company_name}</p>
          </div>

          <img src={ReactImg} alt="company-logo" />
      </article>

      <article className='flex justify-center gap-4 text-sm'>
        <div className='flex justify-center items-center gap-1'>
          <MapPin size={15} />
          {data.location_names[0]}
        </div>

        <div className='flex justify-center items-center gap-1'>
          <Banknote size={15} />
          {data.stipend.salary}
        </div>

        <div className='flex justify-center items-center gap-1'>
          <Calendar size={15} />
          {data.duration}
        </div>
      </article>

      <article className='flex justify-center items-center gap-2 text-sm'>
        <Rows4 size={15} />
        <p className='truncate w-80'>In the delicate dance between strategy and sentiment, 
          a true changemaker must master both logic and longing.
        </p>
      </article>

      <article className='flex justify-start items-center text-xs flex-wrap gap-2'>
        <div className='bg-gray-200 px-2 py-1 rounded-full'>Business Analysis</div>
        <div className='bg-gray-200 px-2 py-1 rounded-full'>Business Development</div>
        <div className='bg-gray-200 px-2 py-1 rounded-full'>Client Interaction</div>
        <div className='bg-gray-200 px-2 py-1 rounded-full'>Data Analysis</div>
      </article>

      <article className='text-xs'>
        <div className='flex justify-center items-center gap-1
        bg-green-200 text-green-500 rounded-full px-2 py-1'>
          <ClockFading size={15} />
          <p>{data.posted_by_label}</p>
        </div>
      </article>
    </article>
  )
}

export default InternshipCard