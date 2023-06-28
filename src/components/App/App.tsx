import React, {Suspense, useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";
import "../../styles/index.scss";
import styles from './App.module.scss';
import useTheme from "../../hooks/useTheme";

const LazyAbout = React.lazy(() => import('../../pages/About/About'));
const LazyContacts = React.lazy(() => import('../../pages/Contacts/Contacts'));


const App: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Link className='me-2' to={'about'}>About</Link>
                <Link to={'contacts'}>Contacts</Link>
                <Routes>
                    <Route path='/about' element={<LazyAbout />}/>
                    <Route path='/contacts' element={<LazyContacts />}/>
                </Routes>
            </Suspense>
            <div>
                <button onClick={() => toggleTheme(theme)}
                    className={ [styles['button'], 'mt-3'].join(' ')}>Toggle theme</button>
            </div>
        </div>
)}

export default App;