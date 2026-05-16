import { ChevronDown, Menu } from "lucide-react"
import { useState } from "react"
import {intershalaLogo} from "../../utils/constants.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className='px-10 md:px-20 py-7 flex justify-start md:justify-between 
    items-center border-b-2 shadow-sm sticky bg-white'>
        <button
            className="md:hidden pr-4"
            onClick={() => setOpen(prev => !prev)}
        >
            <Menu />
        </button>
        <img src={intershalaLogo} alt="intershala-logo" width={100} />

        <article className='hidden md:flex justify-center items-center gap-7'>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p>Internships</p> 
                <ChevronDown />
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p>Courses</p> 
                <ChevronDown />
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p>Jobs</p> 
                <ChevronDown />
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p>Login / Register</p> 
                <ChevronDown />
            </div>
        </article>

        {open && (
            <article className="absolute top-full left-0 w-1/2 h-screen bg-white shadow-lg flex flex-col gap-5 p-5 md:hidden">
                <button>Internships</button>
                <button>Courses</button>
                <button>Jobs</button>
                <button>Login / Register</button>
            </article>
        )}
    </section>
  )
}

export default Navbar