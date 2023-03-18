import { useEffect, useState } from "react"

const Result = () => {
    const [city , setCity] = useState(null);
    const [search, setSearch] = useState("Agra");

    useEffect(()=>{

        const fetchApi = async ()=>{
            // const apikey = "32e7a9d44328b80875530d35b7c40b6f";
            const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${}&appid={32e7a9d44328b80875530d35b7c40b6f}")
            console.log(res)
        }
        fetchApi(); // function
    })
  return (
    <div>
        <div className="container">
            <div>
                <input type="text" placeholder="Enter City Name" onChange={(event=>{

                })} />
                {/* <i class="fa fa-search"></i> */}
            </div>
        </div>
        <div className="boxes">
            <div className="box">
                <div className="city">{city}</div>
                <div className="date">
                    <p>Thursday, March 25, 2023</p>
                    <p>8.323.5 PM</p>
                </div>
                <div className="temp">
                    <h2>18.23&deg;C</h2>
                </div>
                <div className="weath">
                    <p>Cloud</p>
                </div>
                <div className="minmaxTemp">
                    <p>18.4&deg;C | 12.4&deg;C</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result