import { useInternshipStore } from "../../store/useInternshipStore";
import InternshipCard from "./InternshipCard"

const InternshipList = ({data}) => {
  const applyFilters = (dataArray, filters) => {
    return dataArray.filter((item) => {
      if(filters.profile && filters.profile.length > 0 && !filters.profile.includes(item.profile_name))
        return false;

      if(filters.location && filters.location.length > 0 && !filters.location.includes(item.location_names[0]))
        return false;

      if(filters.stipendRange && 
        Number(item.stipend.salary.replace(/[^0-9]/g, "") < (Number(filters.stipendRange) * 2000)))
        return false;
      
      if(filters.duration && filters.duration.length > 0 && !filters.duration.includes(item.duration))
        return false;

      return true;
    });
  }

  const {filters} = useInternshipStore();
  const dataArray = Object.values(data);
  const filteredDataArray = applyFilters(dataArray, filters);
  
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h3 className="font-bold text-3xl">{filteredDataArray.length} Total Internships</h3>
      <p className="font-medium text-gray-400">Latest Summer Internships in India</p>

      {filteredDataArray.map((internship) => (
        <InternshipCard key={internship.id} data={internship} />
      ))}
    </section>
  )
}

export default InternshipList