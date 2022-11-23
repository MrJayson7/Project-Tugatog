import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Homepage from './Pages/HomePage/Homepage';
import OurPeaksPage from './Pages/OurPeaksPage/OurPeaksPage';
import MyAdveturesPage from './Pages/MyAdventuresPage/MyAdveturesPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/signup' element={ <SignupPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/" element={ <Homepage /> } />
                <Route path="/our-peaks" element={ <OurPeaksPage /> } />
                <Route path="/my-adventures" element={ <MyAdveturesPage /> } />
                <Route path="/my-profile" element={ <ProfilePage /> } />
            </Routes>
        </div>

    );
}

export default App;
