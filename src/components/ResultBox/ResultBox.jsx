import React from 'react';

import './result-box.styles.css';

const ResultBox = ({ company, departure, arrival, currency, total }) => {
    return (
        <div>
            <div className="container">
                <div className="card-results">
                    <p> Company: {company}</p>
                    <p>Departure: {departure}</p>
                    <p>Arrival: {arrival}</p>
                    <p>Total: {currency} {total}</p>
                </div>
            </div>

        </div>
    );
}

export default ResultBox;