import React, { Component } from 'react';
import axiosInstance from '../../axios';
import Suggestions from '../../components/SearchButton/Suggestions';
import Style from './SearchButton.css';

class Search extends Component {
    state = {
        error: false,
        query: '',
        results: []
    }

    getInfo = () => {
        axiosInstance.get('/search/users', {
            params: {
                q: this.state.query,
            }
        })
            .then(res => {
                this.setState({
                    results: res.data.items
                })

            })
            .catch(() => this.setState({ error: true }))
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        }, () => this.getInfo()
        )
    }

    render() {
        return (
            <form className={Style.Form}>
                <div className={Style.Search}>
                    <input
                        type="search"
                        placeholder="Search avatars"
                        onChange={this.handleInputChange}
                    />
                </div>
                <Suggestions results={this.state.results} />
            </form>
        )
    }
}

export default Search