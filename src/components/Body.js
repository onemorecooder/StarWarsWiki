import React, { useState, useEffect } from "react";
import Planet from "./PlanetModal";


function Body() {
    const [planets, setPlanets] = useState([]);
    const [currentPlanet, setCurrentPlanet] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://swapi.dev/api/planets/?page=${page}`);
        xhr.onload = () => {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                setPlanets(result.results);
                setTotalPages(Math.ceil(result.count / 10));
            }
        };
        xhr.send();
    }, [page]);

    const handlePlanetClick = (planet) => {
        setCurrentPlanet(planet);
    };

    const handleBackClick = () => {
        setCurrentPlanet(null);
    };

    const handlePrevPageClick = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPageClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="container">
            {currentPlanet ? (
                <Planet planet={currentPlanet} onBackClick={handleBackClick} />
            ) : (
                <>
                    <h2 className="title">Lista de planetas</h2>
                    <ul className="planets-list">
                        {planets.map((planet) => (
                            <li key={planet.name}>
                                <div className="planet-card" onClick={() => handlePlanetClick(planet)}>
                                    <h3>{planet.name}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="pagination">
                        <button className="prev-page" onClick={handlePrevPageClick} disabled={page <= 1}>
                            Anterior
                        </button>
                        <span>
                            Página {page} de {totalPages}
                        </span>
                        <button className="next-page" onClick={handleNextPageClick} disabled={page >= totalPages}>
                            Siguiente
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Body;
