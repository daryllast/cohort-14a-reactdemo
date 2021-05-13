import React, {useState, useEffect} from 'react';
// hooks
import GiphyResult from "./giphy-result";

function Giphy(props) {

    const [searchTxt, setSearchTxt] = useState('');
    const [result, setResult] = useState();

    const onSearchInputChange = async (event) => {
        console.log('event.currentTarget.value', event.currentTarget.value);
        setSearchTxt(event.currentTarget.value)
    };

    const onSearchClick = async () => {
        console.log('The search button was clicked')
        // write the fetch code to fethc data from the giphy api
        let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchTxt}`)
        let json = await res.json()
        console.log('json is', json)
        setResult(json);

    };


    return (
        <>

            <div className="grid grid-cols-12">
                <div className="col-span-12 p-5">

                    <input value={searchTxt}
                           onChange={onSearchInputChange}
                           type="search" className="border w-full p-2" placeholder={'Start typing here...'}/>


                    <p className={searchTxt == 'star wars' ? 'text-red-500' : 'text-blue-500'}>The current value of the searchTxt is : {searchTxt}</p>

                    {searchTxt == 'star wars' && <p>show this paragraph only when the searchTxt is star wars</p>}
                </div>

                <div className="col-span-12 p-5">
                    <button className="pt-2 pb-2 pr-3 pl-2 rounded bg-blue-500 text-white w-full" onClick={onSearchClick}>Search</button>
                </div>


                <div className="col-span-12 p-5 mt-5 border">

                    {result && result.data.map((resultItem, idx) => {
                        return <GiphyResult key={idx} url={resultItem.images.original.url} index={idx}/>
                    })}

                </div>
            </div>



        </>
    );
}

export default Giphy;
