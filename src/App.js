import { useState } from 'react';
import './App.css';
import Country from './components/Country';
var $ = require('jquery-browserify')

function App() {
  // var dark = false
  const [page, setPage] = useState(null)
  return (
    <div className="min-h-screen min-w-screen">
      <Search />
      {page}
    </div>
  );



  function Search() {
    const [ress, setRess] = useState(null)
    function search(input) {
      input = input.replace(' ','')
      if(input==='') {setRess(null); return}
        var results = []
        var all
        $.ajax({
            dataType: 'json',
            url: 'https://restcountries.com/v3.1/all/',
            async: false,
            success: function(data) {all = data}
        })
        for(var i = 0; i <all.length; i++) {
            if(all[i].name.common.toLowerCase().includes(input.toLowerCase())) results.push(all[i].name.common.toLowerCase())
            if(all[i].region.toLowerCase().includes(input.toLowerCase())) results.push(all[i].name.common.toLowerCase())
            if(all[i].cca2.toLowerCase().includes(input.toLowerCase())) results.push(all[i].name.common.toLowerCase())
            // if(all[i].name.official.toLowerCase().includes(input.toLowerCase())) results.push()
            // if(all[i].capital.toLowerCase().includes(input.toLowerCase())) results.push(<a>Capital: {all[i].capital} id:{i}</a>)
        }
        var results2 = []
        for(i = 0; i <results.length; i++) {
          if(!results2.includes(results[i])) results2.push(results[i])
        }
        setRess(results2.map((result)=><div className='w-[10rem] p-1 border-2 border-black m-1' key={result} onClick={() => setPage(<Country name={result} />)}>{result}</div>))
    }
    return (
    <div className='w-[20rem] max-[460]:w-screen flex max-[460]:items-center flex-col'>
      <input onChange={(e) => {search(e.target.value)}} placeholder='Search...' className='w-screen max-w-[30rem] px-5 border-2 border-black h-10 rounded-lg' type="text" />
      <div className='flex flex-wrap w-screen max-w-[30rem] border-black border-b-[1px]'>
        {ress}
      </div>
    </div>
    )
  }
  
  



}
















export default App;
