import React from 'react'

import Header from '../header/header'
import Menu from "../menu/menu";


export default () => {

    return <div className="landing-page">
        <Header />
            <div className="landing-page__body">
                <div className="landing-page__body__menu">
                    <Menu />
                </div>
                <div className="landing-page__body__content">
                    <p>CONTENT</p>
                </div>
            </div>
    </div>
}

