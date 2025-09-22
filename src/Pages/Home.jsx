import React, { useEffect } from "react";

// Pages
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

// Components
import Info from "../Components/Info";
import Doctors from "../Components/Doctors";
import Reviews from "../Components/Reviews";
import BookAppointment from "../Components/BookAppointment";
import SubscribeNewsletter from "../Components/SubscribeNewsletter";
import SolutionStep from "../Components/SolutionStep";
import LegalDocs from "../Components/LegalDocs";

import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) element.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <Info />
            <div id="doctors"><Doctors /></div>
            <Reviews />
            <BookAppointment />
            <SubscribeNewsletter />
            <SolutionStep />
            <LegalDocs />
            <div id="contact"><Contact /></div>
        </>
    );
};

export default Home;
