import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import './Historypage.css';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';
import One from './one.png';
import Two from './two.png';
import Three from './three.png';
let HistoryPage = () => {
    return (
        <div class="col-12" id="page">
            <Header />
            <br />
            <div class="row" id="main-content">
            <div class="col-1"></div>
            <div class="col-10">
                <h1>History of my portfolio</h1>
                <br />
                <h3>My portfolio has gone through a copious amount of changes, check it out below!</h3>
                <br />
                <div class="row">
                    <div class="col-sm">
                        <img class = "site" src={One}></img>
                    </div>
                    <div class="col-md website">
                        <h2>Version 1 - November 2020</h2>
                        <p>
                            This site was made about a month after I got the hang of Javascript, CSS, and HTML. 
                            I only used one (rather long) HTML file and one CSS file for this portfolio as well as some images.
                            This portfolio only has three projects to showcase as they were the ones I worked on when first learning
                            Javascript, HTML, and CSS. 
                            <a onClick={() => {
                                window.location.assign("https://gerardo-abaunza-portfolio-v1.netlify.app/");
                            }}>Click here to visit the first version</a>
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <br />
                    <div class="col-sm">
                        <img class = "site" src={Two}></img>
                    </div>
                    <div class="col-md website">
                        <h2>Version 2 - January 2021</h2>
                        <p>
                            After a few more weeks, I picked up Bootstrap and Node.js. I decided to redo my portfolio to showcase
                            bootstrap on the portfolio as well as include some of the new projects
                            that were made using Node.js. The biggest difference between version 1 and version 2 
                            is the inclusion of bootstrap for styling and the fact that this one has multiple pages.
                            <a onClick={() => {
                                window.location.assign("https://gerardo-abaunza-portfolio-v2.netlify.app/");
                            }}>Click here to visit the first version</a>
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div class="col-sm">
                        <img class = "site" src={Three}></img>
                    </div>
                    <div class="col-md website">
                        <h2>Version 3 - February 2021</h2>
                        <p>
                            This is the current one you're on right now. Since the last version, I learned React and Hooks 
                            so I decided to update my portfolio one last time to showcase React. I'm also working on an extra project in 
                            React, which will be posted when it is finished. Key differences between version 2 and version 3 is how version 3 was made in React
                            along with Browserrouter and Hooks.
                            Because I used Browser Router, one can load the different pages at a much faster rate. There are also some clear noticeable changes with the style.
                        </p>
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

export default HistoryPage