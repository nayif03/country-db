import React from 'react'
import { Searchbar, Lang } from './searchbar'
import Context from './provider'
import { Sidebar } from './sidebar';
import { Viewbar } from './viewbar';

export class Mainpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            results: [],
            country: "",
            names: {},
            name: ""
        }
    }
    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => this.setState({ countries: data, results: data }))

    }
    search = (e) => {
        const searchInput = e.target.value.toUpperCase()
        this.setState({ countries: this.state.results.filter(country => country.name.toUpperCase().includes(searchInput)) })

    }
    countryInfo = (e) => {
        const key = e.target.id
        this.setState({
            country: this.state.countries[key],
            name: this.state.countries[key].name,
            names: this.state.countries[key].translations
        })
    }
    changeLang = (e) => {
        const value = e.target.value
        Object.keys(this.state.names).map(key => {
            if (key === value) {
                return this.setState({
                    name: this.state.names[key]
                })
            } else {
                return this.setState({
                    name: this.state.country.name
                })
            }

        })
    }
    render() {
        return (
            <Context.Provider value={{
                countries: this.state.countries,
                search: this.search,
                country: this.state.country,
                showInfos: this.countryInfo,
                changeLang: this.changeLang,
                name: this.state.name
            }}>
                <Context.Consumer>
                    {(context) => (
                        <>
                            <div className="col-12 border-bottom my-4">
                                <h1>Country DB</h1>
                            </div>
                            <div className="col-12 border-bottom mb-4">
                                <p>Today we create a small country explorer. With the help of <a href="https://restcountries.eu/">https://restcountries.eu/</a>  API</p>
                                <h3>Preview</h3>
                            </div>
                            <div className="col-12 border-bottom d-flex justify-content-between">
                                <Searchbar onChange={context.search} />
                                <Lang onClick={context.changeLang} />
                            </div>

                            <div className="d-flex col-12">
                                <Sidebar onClick={context.showInfos} countries={context.countries} />
                                <Viewbar name={context.name} info={context.country} />
                            </div>
                        </>
                    )}
                </Context.Consumer>

            </Context.Provider>
        )
    }
}