import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import About from './pages/About';
import Categories from './pages/Categories';
import Footer from './components/features/Footer'
import Home from './pages/Home'
import NavBar from './components/features/NavBar'
import Register from './pages/Register';

const App = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/categories' exact>
                        <Categories />
                    </Route>
                    <Route path='/about' exact>
                        <About />
                    </Route>
                    <Route path='/registeration' exact>
                        <Register />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    )
}

export default App