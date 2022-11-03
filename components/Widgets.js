import { SearchIcon } from "@heroicons/react/outline";

function Widgets() {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's New</h4>
       
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Recommended accounts</h4>

      <div className="px-4 flex items-center">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" 
        alt="elon musk"
        className="rounded-full w-11 h-11"
        />
        <div className="leading-5 px-3">
        <h4 className="font-bold">Elon Musk</h4>
        <p className="text-[#6e767d]">Elon Musk</p>
        </div>
      </div>
      
      <div className="px-4 space-y-3 flex items-center">
        <img 
        src="https://upload.wikimedia.org/wikipedia/en/d/db/Aziz_Shavershian_in_2011.jpg" 
        alt="Zyzz"
        className="rounded-full w-11 h-11"
        />
        <div className="leading-5 px-3">
        <h4 className="font-bold">Zyzz</h4>
        <p className="text-[#6e767d]">@zyzz</p>
        </div>
      </div>

      <div className="px-4 space-y-3 flex items-center">
        <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Leksands_IF_logo.svg/1200px-Leksands_IF_logo.svg.png" 
        alt="Leksands If"
        className="rounded-full w-11 h-11"
        />
        <div className="leading-5 px-3">
        <h4 className="font-bold">Leksands If</h4>
        <p className="text-[#6e767d]">@leksands_if</p>
        </div>
      </div>
           
      <div className="px-4 space-y-3 flex items-center">
        <img 
        src="https://www.bestsettings.com/wp-content/uploads/2019/08/f0rest.jpg" 
        alt="F0rest csgo"
        className="rounded-full w-11 h-11"
        />
        <div className="leading-5 px-3">
        <h4 className="font-bold">F0rest</h4>
        <p className="text-[#6e767d]">@f0rest</p>
        </div>
      </div>
  
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;