import React from 'react';
import './App.css';

function Recipie({title,calories,image}){

    return(
        <div className="Recipie">
            <img src={image} alt="" width="354px" height="250px" loading="lazy"/>
            <div className="content">
            <h2>{title}</h2>
            <p className="calories">🔥 {calories}</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt incidunt eos rerum, quisquam distinctio exercitationem eveniet accusantium molestiae accusamus</p>
            </div>
        </div>
    );
}
export default Recipie;