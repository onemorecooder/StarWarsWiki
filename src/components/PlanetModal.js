import React, { useState, useEffect } from "react";
import ResidentModal from "./ResidentModal";

function PlanetModal(props) {
    const [residents, setResidents] = useState([]);
    const [currentResidentUrl, setCurrentResidentUrl] = useState(null);

    useEffect(() => {
        const fetchResidents = async () => {
            const residentUrls = props.planet.residents;
            const promises = residentUrls.map(async (url) => {
                const response = await fetch(url);
                const data = await response.json();
                return {
                    name: data.name,
                    url: url
                };
            });
            const residentData = await Promise.all(promises);
            setResidents(residentData);
        };
        fetchResidents();
    }, [props.planet]);

    const handleResidentClick = (residentUrl) => {
        setCurrentResidentUrl(residentUrl);
    };

    const handleBackClick = () => {
        setCurrentResidentUrl(null);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.onBackClick}>
                    &times;
                </span>
                <h2>{props.planet.name}</h2>
                <p>
                    <strong>Clima:</strong> {props.planet.climate}
                </p>
                <p>
                    <strong>Gravedad:</strong> {props.planet.gravity}
                </p>
                <p>
                    <strong>Población:</strong> {props.planet.population}
                </p>


                {residents.length > 0 && (


                    <div className="div-residents">
                        <h3>Residentes:</h3>
                        <ul className="residents">
                            {residents.map((resident) => (
                                <li key={resident.url}>
                                    <button className="button-residents" onClick={() => handleResidentClick(resident.url)}>{resident.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

            <hr></hr>
            {currentResidentUrl && (
                <ResidentModal residentUrl={currentResidentUrl} onCloseClick={handleBackClick} />
            )}

        </div>
    );
}

export default PlanetModal;
