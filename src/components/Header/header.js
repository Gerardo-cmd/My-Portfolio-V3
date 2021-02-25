import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './header.css';
let Header = () => {
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectContact, setRedirectContact] = useState(false);
    const [redirectProjects, setRedirectProjects] = useState(false);
    const [redirectAbout, setRedirectAbout] = useState(false);
    const [redirectHistory, setRedirectHistory] = useState(false);
    return (
        <div class="master">
            <a onClick={(e) => {
                e.preventDefault();
                setRedirectHome(true);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectHistory(false);
            }}>Home</a>

            <a onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(true);
                setRedirectHistory(false);
            }}>About</a>

            <a onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(true);
                setRedirectAbout(false);
                setRedirectHistory(false);
            }}>Projects</a>

            <a onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectHistory(true);
            }}>History</a>

            <a onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(true);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectHistory(false);
            }}>Contact</a>
            
            {redirectHome ? <Redirect to="/" /> : ''}
            {redirectContact ? <Redirect to='/contact' /> : ''}
            {redirectProjects ? <Redirect to='/projects' /> : ''}
            {redirectAbout ? <Redirect to='/about' /> : ''}
            {redirectHistory ? <Redirect to='/history' /> : ''}
        </div>
    )
}

export default Header;