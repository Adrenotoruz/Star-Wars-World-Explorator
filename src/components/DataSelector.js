import React, { Component } from 'react';
import './DataSelector.css';

const DataSelector = ({dataOptionOnSubmit}) => {
    return(
        <div>
            <div id="Title">
               <p>
               sTaR wArS <br/>
               WORLD EXPLORATOR
               </p> 
            </div>
            <form onSubmit={dataOptionOnSubmit}>
                <div>
                    <p>Select type of data</p>
                    <select name="dataOption">
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                    </select>
                </div>
                <div> 
                    <p>Select number of choosen data</p>
                    <input id="cos" type="number" name="optionNumber" min="1" defaultValue="1"/>   
                </div>
                <div>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    )
}

export default DataSelector