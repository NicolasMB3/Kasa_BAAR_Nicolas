import React from "react";
import Header from '../../Components/Header/';
import ErrorComponent from '../../Components/Error/';
import Footer from '../../Components/Footer/';

function Error() {
    return (
        <>
            <Header />
            <main>
                <ErrorComponent />
            </main>
            <Footer />
        </>
    );
}

export default Error;