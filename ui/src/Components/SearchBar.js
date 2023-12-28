import React, {useState} from 'react'
import './SearchBar.css';

function SearchBar({placeholder, setData}) {

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    const enterChange = async (e) => {
        if(e.key === 'Enter')
        {
            setSearchInput("")

            const response = await fetch("http://127.0.0.1:8000/post-members", {
                method: "POST", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({"input": e.target.value}),
              });
              
            console.log(response)
            const result = await response.json();
            setData(result)
        }
    }

  return (
    <div className = "search">
        <div className = "searchInputs">
            <input 
                type = "text" 
                placeholder={placeholder} 
                onChange={handleChange}
                onKeyDown={enterChange}
                value = {searchInput}
            />
        </div>
    </div>
  )
}

export default SearchBar