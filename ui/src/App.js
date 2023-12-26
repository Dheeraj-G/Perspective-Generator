import './App.css';
import React, {useState, useEffect} from 'react'
import SearchBar from './Components/SearchBar';

function App() {
  const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

  return (
    <div className = "App">
      <div className = "Search">
        <SearchBar placeholder="Enter an opinion..."/>
      </div>

      <div className = "result">
        {(typeof data.members == 'undefined') ? (
          <p>Loading...</p>
        ): (
          data.members.map((member,i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div>
    </div> 
  );
}

export default App;
