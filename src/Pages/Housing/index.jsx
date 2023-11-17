import React, { createContext } from "react";
import { useParams } from 'react-router-dom';
import datas from '../../Ressources/housings.json';

import Header from '../../Components/Header';
import Slideshow from '../../Components/Carrousel';
import Presentation from '../../Components/Presentation';
import Collapse from '../../Components/Collapse';
import Footer from '../../Components/Footer';
import Error from '../Error';

export const MyContextFromHousingPageForCollapse = createContext();
export const MycontextFromHousingPageForPresentation = createContext();

function Housing() {

    const { housingId } = useParams();
    const isHousingIdCorrect = datas.some(item => item.id === housingId);

    let idRegex = /^[a-zA-Z0-9]+$/;


    if (!idRegex.test(housingId) || !isHousingIdCorrect) {
        return <Error />;
    } else {
    
        const housingData = datas.find((item) => item.id === housingId);

        const dataArrayForHostPart = {
            title: housingData.title,
            location: housingData.location,
            hostName: housingData.host.name,
            hostPicture: housingData.host.picture,
            rating: housingData.rating,
            tags: housingData.tags
        }

        const dataArrayForCollapse = [
            { title: "Description", text: housingData.description, className: "collapse__housing" },
            { title: "Equipements", text: housingData.equipments, className: "collapse__housing" }
        ];

        return (
            <>
                <Header />
                <main>
                    <Slideshow pictureArray={housingData.pictures} pictureAlt={housingData.title} />

                    <MycontextFromHousingPageForPresentation.Provider value={dataArrayForHostPart}>
                        <Presentation />
                    </MycontextFromHousingPageForPresentation.Provider>

                    <MyContextFromHousingPageForCollapse.Provider value={dataArrayForCollapse}>
                        <Collapse page="housing" />
                    </MyContextFromHousingPageForCollapse.Provider>

                </main >
                <Footer />
            </>
        );
    }
}

export default Housing;