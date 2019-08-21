import React from 'react'



export const Searchbar = props => (
        <div className="col-3 border-right">
            <input onChange={props.onChange} type="text" className="border-0 form-control" placeholder="Search..." />
        </div> 
)

export const Lang = props =>(
    <div className="d-flex">
            <div><label htmlFor="select">languages:</label></div>
            <div>
                <select onClick={props.onClick} className="border-0 bg-white" id="select">
                    <option value="en" defaultValue>EN</option>
                    <option value="br">BR</option>
                    <option value="de">DE</option>
                    <option value="es">ES</option>
                    <option value="fa">FA</option>
                    <option value="fr">FR</option>
                    <option value="hr">HR</option>
                    <option value="it">IT</option>
                    <option value="ja">JA</option>
                    <option value="nl">NL</option>
                    <option value="pt">PT</option>
                </select>
            </div>
        </div>
)