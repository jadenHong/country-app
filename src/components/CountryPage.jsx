import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

export const CountryPage = () => {
    const [countryData, setCountryData] = useState([]);  // 단순 리액트 사용 71번째 줄에 countryData.map 을해야한다. getData() 이부분 다 살려줘야함
    const { isLoading, data, errorMessage } = useSelector(state => state.countryStore); // 리덕스 사용 71번째 줄에 data.map 을해야한다. 

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

    const dispatch = useDispatch();

    useEffect(() => {
        // getData();
        dispatch(fetchCountries());
    }, [dispatch]);

    // const getData = async () => {
    //     const URL = `http://localhost:7778/country/`;
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     setCountryData(data);
    // }

    return (
        <div>
            {console.log(countryData)}
            {regions.map((region, index) => {
                const getName = () => {
                    if (!region.name.includes('-')) {
                        return region.name.charAt(0).toUpperCase() + region.name.slice(1);
                    } else {
                        return region.name.split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('-');
                    }
                }
                return (

                    <div key={index} className={`region ${region.name}`}>
                        <h2>{getName()}</h2>

                        {data.map((data, index) => {
                            return (
                                data.region === region.shortName
                                &&
                                <Link key={index} to={{
                                    pathname: `/countryInfo/${data.code}`,
                                    state: {
                                        name: data.name,
                                        capital: data.capital,
                                        region: data.region,
                                        currency: data.currency.name,
                                        symbol: data.currency.symbol,
                                        language: data.language.name,
                                        flag: data.flag,
                                    }
                                }}>
                                    <img key={index} className="img" src={data.flag} alt="img" />
                                </Link>

                            )
                        })}

                    </div>

                )
            })}

        </div>
    )
}