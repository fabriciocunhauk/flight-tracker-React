import React from 'react';

const ResultBox = ({ company, departure, arrival, currency, total }) => {
    return (
        <div>
            <div style={{ display: "inline-block", marginTop: "100px", width: "500px", height: "200px", borderRadius: "8px", backgroundColor: "white" }}>

                <p> Company: {company}</p>
                <p>Departure: {departure}</p>
                <p>Arrival: {arrival}</p>
                <p>Total: {currency} {total}</p>
            </div>
        </div>
    );
}

export default ResultBox;