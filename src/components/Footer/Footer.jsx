import {
    getItOnGooglePlay, 
    downloadFromAppStore,
    instagramLogo,
    twitterLogo,
    youTubeLogo,
    linkedInLogo,
} from "../../utils/constants.js";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-sm mt-5 px-10 py-5'>
        <article className='flex flex-col md:flex-row justify-around items-start'>
            <div className='flex flex-col items-start justify-start gap-2'>
                <p>About us</p>
                <p>We're hiring</p>
                <p>Hire interns for your company</p>
                <p>Post a Job</p>
                <p>Competitions</p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
                <p>Team Diary</p>
                <p>Blogs</p>
                <p>Our Services</p>
                <p>Free Job Alerts</p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
                <p>Terms and Conditions</p>
                <p>Privacy</p>
                <p>Contact us</p>
                <p>Annual Returns</p>
                <p>Grievance Redressals</p>
                <p>Resume Maker</p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2'>
                <p>Sitemap</p>
                <p>College TPO registeration</p>
                <p>List of Companies</p>
                <p>Jobs for Women</p>
            </div>
        </article>

        <article className="mt-5 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                    <img src={getItOnGooglePlay} alt="" width={150} />
                    <img src={downloadFromAppStore} alt="" width={150} />
                </div>
                <div className="flex justify-start items-center gap-2">
                    <img src={instagramLogo} alt="instagramLogo" width={30} className="rounded-full cursor-pointer" />
                    <img src={twitterLogo} alt="twitterLogo" width={30} className="rounded-full cursor-pointer" />
                    <img src={youTubeLogo} alt="youTubeLogo" width={30} className="rounded-full cursor-pointer" />
                    <img src={linkedInLogo} alt="linkedInLogo" width={30} className="rounded-full cursor-pointer" />
                </div>
            </div>

            <div className="mt-5">
                <p>© Copyright 2026 Internshala</p>
                <p>{"(Scholiverse Educare Private Limited)"}</p>
            </div>
        </article>
    </footer>
  )
}

export default Footer