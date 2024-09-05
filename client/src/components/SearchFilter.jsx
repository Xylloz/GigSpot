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
        <div className="search-filter">
        <input type="text" placeholder="Search jobs" value={searchTerm} onChange={((e)=>setSearchTerm(e.target.value))} />
        <button onClick={handleSearch}> Search jobs</button>
        <input type="text" placeholder="Location" value={location} onChange={((e)=>setLocation(e.target.value))} />
        <button onClick={handleFilter}> Apply Location Filter</button>


        </div>
    )

}
export default SearchFilter