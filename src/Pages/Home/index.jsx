import React from "react";
import Header from '../../Components/Header';
import Banner from '../../Components/Hero';
import Gallery from '../../Components/Gallery';
import Footer from '../../Components/Footer';

function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner className="banner__home" bannerText="Chez vous, partout et ailleurs" />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default Home;