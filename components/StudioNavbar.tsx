import Link from "next/link"

import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'


function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between p-5">
                    <Link className="text-[#f7ab04] flex items-center" href="/">
                        <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab04] mr-2" />
                        Go To Website</Link>
                </div>

                <div className=" hidden md:flex space-x-5 bg-[#f7ab04] rounded p-2 my-5 mr-12  hover:bg-yellow-400 ">
                    <Link className="text-md font-bold " href="https://www.linkedin.com/in/aayush-yadav-50ab55239/"> Aayush Yadav - Dev Blogs</Link>
                </div>
            </div>
            <>{props.renderDefault(props)}</>

        </div>
    )
}

export default StudioNavbar
