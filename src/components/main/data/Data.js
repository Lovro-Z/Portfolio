import React, {Component} from 'react';
import './data.css';
import axios from "axios";
import DataList from "./DataList";

class Data extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('https://anapioficeandfire.com/api/books').then(res => this.setState({data: res.data}));
    }

    render() {
        return (
            <div className="my-container">
                <h1>Data</h1>
                <DataList dataList={this.state.data}/>
            </div>
        );
    }
}

export default Data;
