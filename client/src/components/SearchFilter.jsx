import React, {useState} from "react";

const SearchFilter = ({onSearch, onFilter})=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = ()=>{
        onSearch(searchTerm)
    }

    const handleFilter = ()=>{
        onFilter(location)
    }

    return(
        <div className="search-filter grid-cols-2 gap-5 mt-1 mb-3 contents bg-slate-400 rounded-md ">
            <div className="flex-1 p-2 my-2">
            <input className="border-gray-500 p-2 mx-1 rounded-lg" type="text" placeholder="Search jobs" value={searchTerm} onChange={((e)=>setSearchTerm(e.target.value))} />
            <button className=" my-2 rounded-lg bg-blue-950 text-white hover:bg-blue-400 p-2 mx-1 "  onClick={handleSearch}> Search jobs</button>
            </div>
            <div className="flex-1 p-2 my-2" >
            <input className=" border-gray-500 p-2 mx-1 rounded-lg" type="text" placeholder="Location" value={location} onChange={((e)=>setLocation(e.target.value))} />
            <button className=" my-2 rounded-lg bg-blue-950 text-white hover:bg-blue-400 p-2 mx-1 " onClick={handleFilter}> Apply Location Filter</button>
            </div>
        </div>
    )

}
export default SearchFilter