import React, {useState} from 'react'
import './SearchBar.css';

function SearchBar({placeholder}) {

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    const enterChange = (e) => {
        if(e.key === 'Enter')
        {
            fetch('/members', {
                method: 'POST',
                body: JSON.stringify(
                  searchInput
                ),
                headers: {
                  'Content-Type': 'application/json'
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    // Handle data
                 })

            setSearchInput("")
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