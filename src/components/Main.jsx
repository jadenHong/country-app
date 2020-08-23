import React, { useEffect, useState } from 'react';
import { Background } from '../components';
import { Link } from 'react-router-dom';
import { FaArrowCircleUp } from 'react-icons/fa';

export const Main = ({ page2Ref, page3Ref, page4Ref }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState('');
    const [errorMsg, setErrorMsg] = useState();
    const API_WEATHER_KEY = '015408c7b2ff4cc5a6b9d6332e145cf6';

    // Scroll functions
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 120) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 120) {
            setShowScroll(false);
        }
    }
    window.addEventListener('scroll', checkScrollTop);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // 시간
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setTimeString(`${date} ${time}`);
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            const { place, weatherTemp, clouds } = await loadData(latitude, longitude);
            setWeather(`${place} ${weatherTemp} ${clouds}`);
            setIsLoading(false);
        }, err => {
            setErrorMsg(err.message);
            setIsLoading(false);
        })
    }, []);

    const loadData = async (latitude, longitude) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_WEATHER_KEY}&units=metric`);
            const data = await response.json();
            const weatherTemp = data.main.temp;
            const place = data.name;
            const clouds = data.weather[0].description;
            console.log(weatherTemp)
            return { weatherTemp, place, clouds };
        } catch (err) {
            return err;
        }
    }

    const renderWeather = () => isLoading ? <div className="spinner" /> : <span className="js-weather">{weather}</span>

    return (
        <div>
            <div className="main-page">
                <Background />
                <div className="title">
                    <div className="title-wrapper"></div>
                    {errorMsg ? <span>{errorMsg}</span> : renderWeather()}
                    {timeString}
                    <h1>React #2 Project</h1>
                    <h2>Created by Sangmean Hong</h2>
                </div>
            </div>
            <div className="page-2 page">
                <div className="world-wrapper" ref={page2Ref}>
                    <div className="page2">
                        <h2>Explore the World</h2>
                        <h3>Search countries in the world</h3>
                        <Link to="/country" className="link link2">Start Now</Link>
                    </div>
                </div>
            </div>

            <div className="page-3 page">
                <div className="details-wrapper" ref={page3Ref}>
                    <div className="page3">
                        <h2>Redux</h2>
                        <h3>Show the Power of Redux</h3>
                        <Link to="/details" className="link link3">Start Now</Link>
                    </div>
                </div>
            </div>

            <div className="page-4 page">
                <div className="board-wrapper" ref={page4Ref}></div>
                <div className="page4">
                    <h2>Your Board</h2>
                    <h3>Search countries in the world</h3>
                    <Link to="/board" className="link link4">Start Now</Link>
                </div>
            </div>
            {/* react-icons API 사용함 */}
            <FaArrowCircleUp className="scrollTop"
                onClick={scrollTop}
                style={{ display: showScroll ? 'flex' : 'none' }} />
        </div>
    );
}