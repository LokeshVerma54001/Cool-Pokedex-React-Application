import { Search } from "lucide-react"


const SearchBar = ({search, setSearch}) => {


    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <form className="p-2 rounded-lg bg-white shadow-lg flex justify-between w-5/6">
        <div className="flex gap-5 items-center flex-1 ml-4">
            <Search size={24} color="indigo"/>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}
                className=" placeholder:font-bold placeholder:text-blue-500 w-full focus:border-none text-blue-500 font-bold text-xl focus:outline-none"
                placeholder="Name/Id"
            />
        </div>
        <button onClick={handleSubmit} className="bg-yellow-400 border rounded-md text-blue-600 font-bold w-36 h-10 hover:bg-yellow-300">Search</button>
    </form>
  )
}

export default SearchBar