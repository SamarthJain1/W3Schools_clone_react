import React from 'react';
import SignUpPage from "./Components/signUp/SignUpPage"
import Sidepanel from './Components/Page_content/Sidepanel';
import Allboxes from './Components/Page_content/Allboxes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from "./Components/Homepage/MainHeader";
import Signup from "./Components/SignInSetUP/Signup/Signup"
import "./App.css";
import Login from './Components/SignInSetUP/Login/Login';
import LoggedInNavbar from './Components/Navbar/LoggedInNavbar';
import MainHeader2 from './Components/Homepage/MainHeader2';

const App = (props) => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainHeader />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signuppage" element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/entry' element={<MainHeader2 />} />

          <Route
            path="*"
            element={
              <>
                <LoggedInNavbar />
                <div className='flex'>
                  <Sidepanel />
                  <Routes>
                    <Route path="/:section/:pageName" element={<Allboxes />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;