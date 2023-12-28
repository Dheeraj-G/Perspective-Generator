import './App.css';
import React, {useState, useEffect} from 'react'
import SearchBar from './Components/SearchBar';

function App() {
  const [data, setData] = useState([])

  const replacerArray = ['\n'];

  return (
    <div className = "App">
      <div className = "Search">
        <SearchBar placeholder="Enter an opinion..." setData = {setData}/>
      </div>

      <div className = "result">
        <div className = "w3-container">
            {render(data)}
        </div>
      </div>
    </div> 
  );
}

function render(info)
{
  let output = JSON.stringify(info)

  output = output.replaceAll('\\n','\n')
  output = output.replaceAll('"test":"','')
  output = output.replaceAll('."','.')
  output = output.replaceAll('\\','')
  output = output.replaceAll('}','')
  output = output.replaceAll('{','')
  output = output.replaceAll('[','')
  output = output.replaceAll(']','')

  return (
    <div className= 'newResult'>
      {output}
    </div>
  )

}

export default App;
