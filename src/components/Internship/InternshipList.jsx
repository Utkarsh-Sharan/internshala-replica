import InternshipCard from "./InternshipCard"

const InternshipList = ({data}) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
        <h3 className="font-bold text-3xl">{Object.keys(data).length} Total Internships</h3>
        <p className="font-medium text-gray-400">Latest Summer Internships in India</p>

        {Object.values(data).map((internship) => (
            <InternshipCard data={internship} />
        ))}
    </section>
  )
}

export default InternshipList