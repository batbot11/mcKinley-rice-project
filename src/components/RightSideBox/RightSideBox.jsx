import React from "react";
import ReactTable, {ReactTableDefaults} from "react-table";
import CardWrapper from "../CardWrapper/CardWrapper";

import "./styles.css";

const RightSideBox = ({data}) => {

    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
              )
        },
        {
            Header: 'Year',
            accessor: 'year',
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
              )
        },
        {
            Header: 'Color',
            accessor: 'color',
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
              )
        },
        {
            Header: 'Pantone Value',
            accessor: 'pantone_value',
            Cell: row => (
                <div style={{ textAlign: "center" }}>{row.value}</div>
              )
        }
    ];

    Object.assign(ReactTableDefaults, {
        defaultPageSize: 5,
        showPagination: false,
      })

    return(
    <CardWrapper>
        <ReactTable data={data} columns={columns}/>
    </CardWrapper>
)};

export default RightSideBox;