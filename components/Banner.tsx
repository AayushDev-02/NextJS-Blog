
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row space-x-5 items-center justify-between font-bold px-10 py-5 mb-10 text-center md:text-left md:items-start ">

      <div className="min-w-fit space-y-5" >
        <h1 className="xl:text-7xl md:text-6xl text-4xl  ">Aayush's Daily Blog</h1>
        <h2 className="mt-2 md:mt-5 ">Welcome to {" "} <span className="underline decoration-4 decoration-[#F7AB04]">Every Developers</span> favourite blog in the Devosphere</h2>

      </div>
      <div className="flex justify-center p-0 m-0  mt-5 md:mt-5">
        <p className=" text-gray-400 max-w-sm  text-center md:text-justify  ">Get my latest post , anytime anywhere. 
        </p>
      </div>


    </div>
  )
}

export default Banner
