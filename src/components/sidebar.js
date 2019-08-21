import React from 'react'

export const Sidebar = props => (
    <div className="col-3 border-right">
        <div>
            {props.countries.map((country, index) => (
                <div className="border-bottom w-100 pt-2 pointer btn bg-white" onClick={props.onClick} key={index} id={index}>
                    <div id={index}>{country.name}</div>
                    <small id={index}>{country.subregion}</small>
                </div>

            ))}

        </div>

    </div>
)