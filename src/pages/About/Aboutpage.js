import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import './Aboutpage.css';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';

let AboutPage = () => {
    return (
        <div class="col-12" id="page">
            <Header />
            <br />
            <div id="main-content">
                <div class="row">
                    <div class="col-1">
                    </div>
                    <div class="col-sm">
                        <h2>Computer Science Background</h2>
                        <p>I am a rising senior Computer Science student at George Mason University. 
                        It is there that I learned Java, Python, and C as well as various other topics such as agile methods, reading assembly, data structures, 
                        database concepts, and formal methods and logic. 
                        Additionally, I am self taught in Javascript, HTML, CSS, Node.js, and am currently learning React. I have coded for over three years now and love the challenge. 
                        I currently reside in Centreville, Virginia and am currently looking to intern remotely or anywhere in the Northern Virginia and DC Metropolitan Area 
                        as a front-end developer
                        or software engineer!
                        </p>
                        <br />
                        <h2>Independent Learner</h2>
                        <p>
                        While I have studied a copious amount of things at George Mason University, a good portion of my skills have been from learning independently.
                        This includes most of the skills needed for web design. In my personal time, I taught myself through online resources and 
                        by working on personal projects, which are the ones you can view on this portfolio.
                        Some of my school projects are on Github. I started by learning Javascript, HTML, and CSS. Once I got comfortable with those languages, 
                        I moved on to back-end development with Node.js. 
                        This is when my projects started to kick it up a notch. I even collaborated with a friend to work on a recipe app together. 
                        Lastly, I'm picking up the framework, React. 
                        In fact, this portfolio was made using React!
                        </p>
                    </div>
                    <div class = "col-sm">
                        <ul class = "skills__list">
                            <h1>Skills</h1>
                            <li>Proficient with: 
                                <ul>
                                    <li class="language">Java</li>
                                    <li class="language">Javascript</li>
                                    <li class="language">HTML</li>
                                    <li class="language">CSS</li>
                                    <li class="language">Node.js</li>
                                </ul>
                            </li>
                            <br />
                            <li>Familiar with: 
                                <ul>
                                    <li class="language">C</li>
                                    <li class="language">Python</li>
                                </ul>
                            </li>
                            <br />
                            <li>Fluent in Spanish</li>
                            <br />
                            <li>Familiar with Git/Github and able to cooperate well in a team environment</li>
                            <br />
                            <li>Comfortable with agile methods and team projects</li>
                            <br />
                            <li>Comfortable with data structures such as linked lists, hashes, trees, graphs, queues, stacks, etc.</li>
                        </ul>
                    </div>
                    <div class="col-1"></div>
                </div>
                <br />
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <h2>Computer Science courses I have taken at Mason</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                    </div>
                    <div class="col-4">
                        <ul>
                            <li>Intro to Computer Science (Python)</li>
                            <li>Object Oriented Programming (Java)</li>
                            <li>Intro to Low-level programming (C)</li>
                            <li>Formal Methods and logic</li>
                            <li>Ethics/Law for Computer Science</li>
                            <li>Data Structures (Java)</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul>
                            <li>Software Engineering -- Currently taking</li>
                            <li>Database Concepts (SQL) -- Currently taking</li>
                            <li>Intro to Artificial Intelligence -- Currently taking</li>
                            <li>Analysis of Algorithms -- Currently taking</li>
                            <li>Computer Systems and Programming (C) -- Currently taking</li>
                        </ul>
                    </div>
                    <div class="col-2">
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default AboutPage