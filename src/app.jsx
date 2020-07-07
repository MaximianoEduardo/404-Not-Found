import React from 'react'
import Header from './components/header'
import Scarecrow from './components/scarecrow'
import url from './Image/Scarecrow.png'
import BadNews from './components/badnews'
import News from './components/news'
import BtnHome from './components/btnHome'
import Footer from './components/Footer'

export default () =>

    <div className='content-box'>
        <Header title='404 not found' />
        <div className='content'>
            <Scarecrow image={url} />
            <div className='content__box'>
                <BadNews title='I have bad news for you'>
                    <News />
                </BadNews>
                <BtnHome link='#' text='Back to Homepage'/>
            </div>
        </div>
        <Footer />
    </div>
