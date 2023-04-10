import React, { useState, useEffect } from "react";

function ResidentModal({ residentUrl, onCloseClick }) {
    const [resident, setResident] = useState(null);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", residentUrl);
        xhr.onload = () => {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                setResident(result);
            }
        };
        xhr.send();
    }, [residentUrl]);

    return (
        <div className="modal">
            {resident ? (
                <>
                    <div className="modal-content">
                        <h2>{resident.name}</h2>
                        <p>
                            <strong>Altura:</strong> {resident.height} cm
                        </p>
                        <p>
                            <strong>Peso:</strong> {resident.mass} kg
                        </p>
                        <p>
                            <strong>Color de cabello:</strong> {resident.hair_color}
                        </p>
                        <p>
                            <strong>Color de piel:</strong> {resident.skin_color}
                        </p>
                        <p>
                            <strong>Color de ojos:</strong> {resident.eye_color}
                        </p>
                        <p>
                            <strong>Año de nacimiento:</strong> {resident.birth_year}
                        </p>
                        <p>
                            <strong>Género:</strong> {resident.gender}
                        </p>
                    </div>
                    <button className="modal-close-btn" onClick={onCloseClick}>
                        Cerrar
                    </button>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default ResidentModal;
