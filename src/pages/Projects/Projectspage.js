import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import './Projectspage.css';
import Header from '../../components/Header/header.js';
import Footer from '../../components/Footer/footer.js';
import hangman from './hangman.png';
import todo from './todo.png';
import notes from './notes.png';
import weather from './weather.png';
import recipe from './recipe.png';

let ProjectsPage = () => {
    return (
        <div class="col-12" id="page">
            <Header />
            <br />
            <div class = "projects row" id="main-content">
                <div class="col-1"></div>
                    <div class="container col-10">
                        <h1>Here are some of my projects</h1>
                        <br />
                        <div className="row" id = "Hangman">
                            <div className="col-lg">
                                <img className="project" src={hangman}></img>
                            </div>
                            <div className="col-lg">
                                <h2>Hangman App</h2>
                                <p>This is the traditional hangman game. It will fetch a random two words from an API and will return the words as asteriks 
                                    so that the user can guess letter by letter and eventually, the words. 
                                    If the user guesses a correct letter then the letter will show up in place of the asterik in every occurence of it in both of the words. 
                                    If the user makes an incorrect guess then the number of guesses the user has left will decrease by one.
                                    The user wins the game by either figuring out the word within the alloted number of guesses or fails the game by running out 
                                    of guesses without guessing the words. If the user types in a letter that has already been guessed, then nothing will happen. Please note that this app is not mobile friendly.
                                    <a onClick={() => {
                                        window.location.assign("https://gerardo-hangman.netlify.app/");
                                    }}>Click here to visit the Hangman App</a>
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row" id = "Todo App">
                            <div className="col-lg">
                                <h2>Todo App</h2>
                                <p>The user can add todos and remove them as they wish. There are checkboxes next to each todo 
                                    that the user can check to signify if it is completed or not. At the top of the website one
                                    can find a search bar that will filter the todos based on what the user types in by looking for 
                                    a matching title. The user will also be told how many todos are left based on how many unfinished 
                                    (unchecked) todos exist.
                                    There is also an option to only display the incompleted todos.
                                    <a onClick={() => {
                                        window.location.assign("https://gerardo-todos.netlify.app/");
                                    }}>Click here to visit the Todo App</a>
                                </p>
                            </div>
                            <div className="col-lg">
                                <img className="project" src={todo}></img>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row" id = "Notes App">
                            <div className="col-lg">
                                <img className="project" src={notes}></img>
                            </div>
                            <div className="col-lg">
                                <h2>Notes App</h2>
                                <p>This application allows the user to take notes and save them via their local storage. The notes can be sorted either 
                                    alphabetically, by last edited, or by last created. Additionally, the notes can be searched by their title by using the filter notes search bar.
                                    <a href = "https://gerardo-notes.netlify.app/">Click here to visit the Notes App</a>
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row" id = "Weather App">
                            <div className="col-lg">
                                <h2>Weather App</h2>
                                <p>
                                    This application allows the user to input any location and recieve the current forecast for that location!
                                    It will include the temperature it is outside, what temperature it feels like, the humidity, and the visibility.
                                    It accomplishes this by using two APIs which are linked to in the Weather App's About page.
                                    <a href="https://abaunza-weather-application.herokuapp.com/">Click here to visit the Weather App</a>
                                </p>
                            </div>
                            <div className="col-lg">
                                <img className="project" src={weather}></img>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row" id = "Recipe App">
                            <div className="col-lg">
                                <img className="project" src={recipe}></img>
                            </div>
                            <div className="col-lg">
                                <h2>Recipe App</h2>
                                <p>
                                    This was actually a collaboration between another friend and I on github! 
                                    <a href="https://github.com/JoshuaLamke/RecipeApp">Click here to visit the github repository for this app!</a>
                                </p>
                                <p>
                                    Users must sign up and create an account by inserting their name, email, and creating a new password.
                                    This application allows the user to save their own recipes as well as edit them and delete them.
                                    Users are also able to sort their recipe by type (which is the default sorting method), alphabetically, and by last created.
                                    The database is on Heroku so logging in will take a bit of time but afterwards everything will work normally.
                                    <a href="https://recipe-app-jg.netlify.app/">Click here to visit the Recipe App</a>
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

export default ProjectsPage