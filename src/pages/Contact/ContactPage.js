import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import './ContactPage.css';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';
import Github from './img_github.png';
import LinkedIn from  './img_linkedin.png';
import Handshake from './img_handshake.png';

let ContactPage = () => {
    return (
        <div class="col-12" id="page">
            <Header />
            <br />
            <div class="row" id="main-content">
            <div class="col-1"></div>
            <div class="col-10">
                <h1>Connect with me</h1>
                <br />
                <h3>Click on one of the websites below to visit it</h3>
                <br />
                <div class="row">
                    <div class="col-sm element">
                        <a class="link" href="https://github.com/Gerardo-cmd">Github</a>
                        <br />
                        <br />
                        <img class = "img" src={Github} onClick={() => {
                            window.location.assign("https://github.com/Gerardo-cmd");
                        }}></img>
                    </div>
                    <br />
                    <div class="col-sm element">
                        <a class="link" href="https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/">LinkedIn</a>
                        <br />
                        <br />
                        <img class = "img" src={LinkedIn} onClick={() => {
                            window.location.assign("https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/");
                        }}></img>
                    </div>
                    <br />
                    <div class="col-sm element">
                        <a class="link" href="https://app.joinhandshake.com/users/12808784">Handshake</a>
                        <br />
                        <br />
                        <img class = "img" src={Handshake} onClick={() => {
                            window.location.assign("https://app.joinhandshake.com/users/12808784");
                        }}></img>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default ContactPage