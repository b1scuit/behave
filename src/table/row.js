import React from 'react';

import Cell from './cell';

function Row(props) {
    const items = [];

    for(let i = 0; i<= props.cells; i++) {
        items.push(<Cell value={i} />)
    }

    return(
        <tr>
            <th scope="row">{props.scope}</th>
            {items}
        </tr>
    );
}

export default Row;
