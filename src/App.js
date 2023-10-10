// import React from 'react';
// import Navbar1 from './Components/Navbar/Navbar1';
// import Navbar2 from './Components/Navbar/Navbar2';
// import SignUpPage from "./Components/signUp/SignUpPage"
// import Sidepanel from './Components/Page_content/Sidepanel';
// import Allboxes from './Components/Page_content/Allboxes';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainHeader from "./Components/Homepage/MainHeader";
// import Signup from "./Components/SignInSetUP/Signup/Signup"
// import "./App.css";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar1 />
//         <Navbar2 />
//         <Routes>
//           <Route path='/' Component={MainHeader} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="signuppage" element={<Signup />} />
//         </Routes>
//         <div className='flex'>
//           <Sidepanel />
//           <Routes>
//             <Route path="/:section/:pageName" element={<Allboxes />} />
//           </Routes>
//         </div>
//         <SignUpPage />
//       </Router>
//     </>
//   )
// }


// export default App;


import React from 'react';
import Navbar1 from './Components/Navbar/Navbar1';
import Navbar2 from './Components/Navbar/Navbar2';
import SignUpPage from "./Components/signUp/SignUpPage"
import Sidepanel from './Components/Page_content/Sidepanel';
import Allboxes from './Components/Page_content/Allboxes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from "./Components/Homepage/MainHeader";
import Signup from "./Components/SignInSetUP/Signup/Signup"
import "./App.css";
import Login from './Components/SignInSetUP/Login/Login';
import NavbarCombined from './Components/Navbar/NavbarCombined';
import LoggedInNavbar from './Components/Navbar/LoggedInNavbar';
import MainHeader2 from './Components/Homepage/MainHeader2';

const App = (props) => {
  
  return (
    <>
      <Router>
       

        <Routes>
          {/* Main landing page */}
       
          <Route path='/' element={<MainHeader />} />

          {/* Sign up route - only show SignUpPage */}
          <Route path="/signup" element={<SignUpPage />} />

          {/* Specific signup form page - only show the form */}
          <Route path="/signuppage" element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/entry' element={<MainHeader2/>}/>

          {/* All other content */}
          <Route
            path="*"
            element={
              <>
           <LoggedInNavbar/>
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
