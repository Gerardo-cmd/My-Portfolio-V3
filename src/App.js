import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/Home/Homepage.js';
import AboutPage from './pages/About/Aboutpage.js';
import ContactPage from './pages/Contact/ContactPage.js';
import HistoryPage from './pages/History/Historypage.js';
import ProjectsPage from './pages/Projects/Projectspage.js'
function App() {
  return (
    <div id="body">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/projects" component={ProjectsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
