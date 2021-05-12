import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Newsfeed from './components/Newsfeed';
import Stats from './components/Stats';

const App = () => {
    return (
        <div className='App'>
            <div className="app__header">
                <Header />
            </div>
            <div className="app__body">
                <div className="app__container">
                    <Newsfeed />
                    <Stats />
                </div>
            </div>
        </div>
    )
}

export default App;
