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
                <select className='charSelect'>
                    <option>Waldo</option>
                    <option>Wizard</option>
                    <option>BeeGuy</option>
                </select>
            </div>
    )
}

export default BorderPiece