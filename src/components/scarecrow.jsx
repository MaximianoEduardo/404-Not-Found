import React from 'react'

export default (props) => { 
    const url = require('../Image/Scarecrow.png')
    return (
        <div className='content__image'>
            <img src={url} alt=""/>
        </div>
    )
}
