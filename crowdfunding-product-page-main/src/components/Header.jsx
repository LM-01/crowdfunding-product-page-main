import React from 'react';
import logo from '../images/logo-mastercraft.svg'

export function Header(){
    return <>
        <div className="header">
            {/* <img src="./images/image-hero-desktop.jpg" alt="Header Image" /> */}
            <div className="header_row">
            <div className="header_row__logo">LOGO</div>
            <div className="header_row__navigation">About
                Discover
                Get Started</div>
        </div>

        </div>
        <section className="main main-top-overlay">
            <img src={logo} alt="Mastercraft logo" className="main-logo" />
            <h1 className="heading_primary">Mastercraft Bamboo Monitor Riser</h1>
            <h3 className="heading_primary--sub u-margin-bottom-md">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h3>
            
            <div className="main_row u-margin-bottom-sm">
            <button className="main_button main_button--backproject">Back this project</button>
            <button className="main_button main_button--bookmark">
                <div className="main_button--bookmark-icon"><span className="main_button--bookmark-text">Bookmark</span></div>
                </button>
            </div>
        </section>
  </>
}