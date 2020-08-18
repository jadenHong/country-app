import React, { useEffect, useState } from 'react';

export const CountryPage = () => {
    const [countryData, setCountryData] = useState([]);

    const regions = [
        {
            name: "asia",
            shortName: "AS",
        },
        {
            name: "europe",
            shortName: "EU",
        },
        {
            name: "africa",
            shortName: "AF",
        },
        {
            name: "oceania",
            shortName: "OC",
        },
        {
            name: "north-america",
            shortName: "NA",
        },
        {
            name: "south-america",
            shortName: "SA",
        },
    ];

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const URL = `http://localhost:7778/country/`;
        const response = await fetch(URL);
        const data = await response.json();
        setCountryData(data);
    }
    return (
        <div>
            {console.log(countryData)}
            {regions.map(region => {
                const getName = () => {
                    if (!region.name.includes('-')) {
                        return region.name.charAt(0).toUpperCase() + region.name.slice(1);
                    } else {
                        return region.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('-');
                    }
                }
                return (
                    <div className={`region ${region.name}`}>
                        <h2>{getName()}</h2>
                        {countryData.map((data, index) => { return data.region === region.shortName && <img key={index} className="img" src={data.flag} alt="img" /> })}
                    </div>
                )
            })}
        </div>
    )
}