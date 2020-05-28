import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {Switch, Route} from 'react-router-dom';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Services from "./containers/Services/Services";

function App() {
    return (
        <div className="App">

            <Layout>

                <Switch>

                    <Route path={'/services'} component={Services} />
                    <Route path={'/contacts'} component={Contacts} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/'} component={Home} />

                </Switch>

            </Layout>

        </div>
    );
}

export default App;
