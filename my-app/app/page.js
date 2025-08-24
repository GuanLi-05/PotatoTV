"use client"

import React from "react"

export default function Home() {
  const [searchInput, setSearchInput] = React.useState("")

  const submitSearch = () => {
    alert("Searched: " + searchInput)
  }

  return (
    <div className="bg-white h-screen w-full text-black relative flex justify-center items-center">
      <div className="flex flex-col items-center mb-5">
        <p className="font-comfortaa text-8xl font-semibold tracking-[-0.065em] mb-5">Potato TV</p>
        <div className="bg-[url('/img/potato-wave.png')] h-48 w-48 bg-[auto_250px] bg-top bg-no-repeat"></div>
        <div className="bg-[#D9D9D9] h-24 w-200 rounded-full border-12 border-white relative">
          <form
            className="h-full w-9/10"
            onSubmit={submitSearch}>
            <input
              className="h-full w-full font-shortstack text-[#686868] placeholder:text-[#686868] tracking-tighter placeholder:tracking-tighter text-2xl pl-9 rounded-4xl rounded-r-none focus:placeholder-transparent focus:outline-none"
              placeholder="Search or URL"
              onChange={e => setSearchInput(e.target.value)}
              value={searchInput}
            ></input>
            <div
              className="h-7 w-7 bg-[url('/icons/search-icon.png')] bg-contain bg-no-repeat absolute right-8 top-5.5"
              onClick={submitSearch}
            ></div>
          </form>
        </div>
      </div>
    </div>
  )
}