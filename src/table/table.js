import React from 'react';
import Row from './row';
import './table.css';

function Table(props){
    return(
        <table className={props.class + " table table-bordered"}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                </tr>
            </thead>
            <tbody>
                <Row scope="1" cells="4" />
                <Row scope="2" cells="4" />
                <Row scope="3" cells="4" />
                <Row scope="4" cells="4" />
                <Row scope="5" cells="4" />
            </tbody>
        </table>
    );
}

export default Table;
