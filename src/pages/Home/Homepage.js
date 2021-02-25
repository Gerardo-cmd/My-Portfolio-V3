import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import './Homepage.css';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';
let HomePage = () => {
    return (
        <div class="col-12" id="page">
            <Header />
            <div class="d-flex justify-content-center"id="main-content">
                <h1 id="title">Gerardo Abaunza</h1>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage