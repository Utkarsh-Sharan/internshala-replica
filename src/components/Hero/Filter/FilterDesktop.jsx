import { Filter } from "lucide-react"
import InputField from "../../Input/InputField"
import InputRange from "../../Input/InputRange"
import { useState } from "react"
import { useInternshipStore } from "../../../store/useInternshipStore"

const FilterDesktop = () => {
  const [filterData, setFilterData] = useState({
    profile: [],
    location: [],
    stipendRange: "",
    duration: [],
  });
  const {setFilters} = useInternshipStore();

  const handleChange = (key, value) => {
    setFilterData((prev) => ({...prev, [key]: value}));
  }

  const handleSubmit = () => {
    setFilters(filterData);
  }

  return (
    <section className="px-2 py-4 flex flex-col justify-center items-center gap-5 
      border border-gray-300 bg-white md:shadow-md rounded-md md:sticky top-5 h-fit">
      <div className="flex justify-center items-center gap-2">
        <Filter />
        <h3>Filters</h3>
      </div>

      <section className="flex flex-col items-start justify-center gap-4">
        <InputField 
          label={"profile"}
          value={filterData.profile}
          onChange={handleChange}
          options={["Marketing", "Computer Science"]}
        />
        <InputField 
          label={"location"}
          value={filterData.location}
          onChange={handleChange}
          options={["Delhi", "Bangalore", "Mumbai"]}
        />
        <InputRange 
          value={filterData.stipendRange}
          onChange={handleChange}
        />
        <InputField 
          label={"duration"} 
          value={filterData.duration}
          onChange={handleChange}
          options={["2 months", "3 months", "4 months"]}
        />
      </section>

      <article className='flex w-full justify-end items-center gap-4 pt-4'>
        <button className='text-blue-500'>Clear All</button>
        <button 
          className='bg-blue-500 text-white rounded-md px-2 py-1'
          onClick={handleSubmit}
        >
          Apply
        </button>
      </article>
    </section>
  )
}

export default FilterDesktop