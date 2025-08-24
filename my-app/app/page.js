"use client"

export default function Home() {
  return (
    <div className="bg-white h-screen w-full text-black relative flex justify-center items-center">
      <div className="flex flex-col items-center">
        <p className="font-comfortaa text-8xl font-semibold tracking-[-0.065em] mb-5">Potato TV</p>
        <div className="bg-[url('/img/potato-wave.png')] h-48 w-48 bg-[auto_250px] bg-top bg-no-repeat"></div>
        <div className="bg-[#D9D9D9] h-24 w-200 rounded-full border-12 border-white">
          <input
            className="h-full w-18/20 font-shortstack text-[#686868] placeholder:text-[#686868] tracking-tighter placeholder:tracking-tighter text-2xl pl-8.5 rounded-4xl rounded-r-none focus:placeholder-transparent focus:outline-none"
            placeholder="Search or URL"
          >
          </input>
        </div>
      </div>
    </div>
  )
}
