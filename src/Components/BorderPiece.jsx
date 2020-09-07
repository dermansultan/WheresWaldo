import React from "react";

function BorderPiece(props){
    const style = {
        left: `${props.left - 30 / 2}px`,
        top: `${props.top - 50 / 2}px`,
        position: 'absolute',
        display: `${props.clicked}`,
        justifycontent: 'flexstart',
        flexdirection: 'row',
    }
    return(
        <div className='borderContainer' style={style}>
                <div className='border'>
                </div>
                <select className='charSelect' value={props.value} onChange={props.onChange} name='selectedChar'>
                    <option value='waldo'>Waldo</option>
                    <option value='wizard'>Wizard</option>
                    <option value='odlaw'>Odlaw</option>
                </select>
            </div>
    )
}

export default BorderPiece