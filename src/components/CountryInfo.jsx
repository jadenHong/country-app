import React from 'react';
import { useLocation } from 'react-router-dom';

export const CountryInfo = () => {
    const locations = useLocation();
    const countryData = locations.state;
    console.log(countryData);
    const { flag, name, capital, region, currency, language, symbol } = countryData;
    return (
        <div>
            <img src={flag} alt="img" style={{ width: '60px', height: '60px' }} />
            <h3>{name}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Region: {region}</h4>
            <h4>Currency: {currency} ({symbol})</h4>
            <h4>Language: {language}</h4>
        </div>
    )
}