var $ = require('jquery-browserify')
export default function Country(props) {
    var country
    $.ajax({
        dataType: 'json',
        url: 'https://restcountries.com/v3.1/name/'+props.name,
        async: false,
        success: function(data) {country = data[0]}
    })
    return (
        
    <div className='flex flex-col'>
        <div className='flex flex-wrap'>
            <img className='w-[30vw] border-[1px] border-black' src={country.flags.svg} alt="" />
            <span className='text-[30px] px-5 p-2 title'>{country.name.common}</span>
        </div>
        <div className='flex flex-col p-5 gap-2.5'>
            {country.name.common!==country.name.official&&<span className=''>Official name: "{country.name.official}"</span>}
            <div className='bg-[#5aff44b6] p-5 max-w-[20rem] rounded-xl'>Continent: {country.continents}
                <div className='bg-[#08ceff] p-5 rounded-xl'>{country.name.common}
                    <div className='bg-[#ff5252] p-5 rounded-xl'>Capital: {country.capital}</div>
                </div>
            </div>
            <span>Currency: {country.currencies[Object.keys(country.currencies)[0]].name}({country.currencies[Object.keys(country.currencies)[0]].symbol})</span>
            <span>Timezone(s): {country.timezones.map((timezone)=><>{timezone} </>)}</span>
        </div>
    </div>
    )
}