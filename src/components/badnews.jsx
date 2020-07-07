import React from 'react'

export default (props) => 
     
    <div className="content__box__text">
        <div className='title'> { props.title } </div>
        <div className='description'> { props.children } </div>
    </div>
