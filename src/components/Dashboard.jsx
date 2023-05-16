import React from 'react';


export default function Dashboard(props) {
    return (
        <div className='container'>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Car Model</th>
                <th scope="col">Release Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{props.car_model}</td>
                <td>{props.year}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
