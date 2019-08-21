import React from 'react'

export const Viewbar = props => {
    if (props.info) {
        return (
            <div className="d-flex justify-content-around col-9 my-5">
                <div className="col-4">
                    <div className="mb-5">
                        <h2>{props.name}</h2>
                        <small>{props.info.subregion}</small>
                    </div>
                    <div className="d-flex">
                        <div>
                            <p> <strong>Region :</strong>  {props.info.region}</p>
                            <p> <strong>Capital :</strong>  {props.info.capital}</p>
                            <p><strong>Population :</strong>
                                {props.info.population}
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col-4">
                    <img className="w-100 border" src={props.info.flag} alt="Flag" />
                </div>
            </div>
        )
    } else {
        return (<div className="d-flex justify-content-around col-9 my-5">Click on country .. </div>)
    }
} 