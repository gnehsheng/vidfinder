import React from "react";
import logo from '../Images/VIDFINDER LOGO-01.png'
import { Dimensions } from 'react'
import FeatureBox from "../Components/FeatureBox";
import { useNavigate } from "react-router-dom";

export default function MainPage() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/players`;
        navigate(path);
    }

    return (
        <div>
            <img classname='logo' src={logo} alt='logo' />

            <p>
                Everyone loves videos — the average person spends 2.5 hours per day
                watching videos online. 69% of consumers prefer to watch a video explaining a product or service.
                Only 18% want to read a text-based article, and 4% prefer an infographic.
            </p>

            <p>
                Vidfinder takes the top results from YouTube, DailyMotion and Vimeo, and returns
                them all to you in one convenient location!
            </p>

            <FeatureBox />
            <button className='button'
                onClick={routeChange}
                primary
            >
                Get Started
            </button>

            <footer>
                Created by Ng Yong Sheng (Source at <a href={'https://github.com/gnehsheng?tab=repositories'}>github</a>)
            </footer>
        </div>
    )
}