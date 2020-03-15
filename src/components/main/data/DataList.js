import React, {Component} from "react";
import DataItem from "./DataItem";

class DataList extends Component {

    render() {
        return this.props.dataList.map(dataItem => (
            <DataItem key={dataItem.released} dataItem={dataItem}/>
        ));
    }
}

export default DataList;
