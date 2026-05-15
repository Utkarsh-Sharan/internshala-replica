import { Filter } from "lucide-react"
import InputField from "../../Input/InputField"
import InputRange from "../../Input/InputRange"

const FilterDesktop = () => {
  return (
    <section className="px-2 py-4 flex flex-col justify-center items-center gap-5 
      border border-gray-300 md:shadow-md rounded-md md:sticky">
      <div className="flex justify-center items-center gap-2">
        <Filter />
        <h3>Filters</h3>
      </div>

      <section className="flex flex-col items-start justify-center gap-4">
        <InputField label={"profile"} placeholder={"e.g. Marketing"} />
        <InputField label={"location"} placeholder={"e.g. Delhi"} />
        <InputRange />
        <InputField label={"duration"} />
      </section>

      <article className='flex justify-end items-center gap-4 pt-4'>
        <button className='text-blue-500'>Clear All</button>
        <button className='bg-blue-500 text-white rounded-md px-2 py-1'>Apply</button>
      </article>
    </section>
  )
}

export default FilterDesktop