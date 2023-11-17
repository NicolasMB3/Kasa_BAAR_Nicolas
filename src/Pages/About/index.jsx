import React, { createContext } from "react";
import datas from '../../Ressources/about.json';
import Header from '../../Components/Header';
import Banner from '../../Components/Hero';
import Collapse from '../../Components/Collapse';
import Footer from '../../Components/Footer';

export const MyContextFromAboutPageForCollapse = createContext();

function About() {

    const dataArrayForCollapse = datas.map(item => ({
        title: item.title,
        text: item.text,
        className: "collapse__about"
    }));

    return (
        // Fragment
        <>
            <Header />
            <main>
                <Banner className="banner__about" bannerText="A propos du site de location Kasa" />
                <MyContextFromAboutPageForCollapse.Provider value={dataArrayForCollapse}>
                    <Collapse page="about" />
                </MyContextFromAboutPageForCollapse.Provider>
            </main >
            <Footer />
        </>
    );
}

export default About;