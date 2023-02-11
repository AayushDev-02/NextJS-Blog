import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex flex-col md:flex-row  space-y-10 items-center md:justify-between md:space-x-2 font-bold px-10 py-5 md:space-y-0">
      <div className="flex items-center space-x-2 md:bg-white py-2 bg-[#f7ab04] rounded-md w-full justify-center md:w-fit ">
        <Link href="/">
          <Image className="rounded-full border-4 border-black" width={50} height={50} alt="logo" src="/images/logo.png" />
        </Link>
        <h1>The Dev-Blog</h1>
      </div>

      <div >
        <Link className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB04] flex items-center rounded-full text-center" href="https://www.linkedin.com/in/aayush-yadav-50ab55239/">Connect on LinkedIn</Link>
      </div>
    </header>
  )
}

export default Header
