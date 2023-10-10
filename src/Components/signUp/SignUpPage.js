import React from 'react'
import SignUpLink from './Files/SignUpLink'
import Acheivement from './Files/Acheivement'
import PublicProfile from './Files/PublicProfile'
import W3Community from './Files/W3Community'
import W3Spaces from './Files/W3Spaces'
import WantToUpgarde from './Files/WantToUpgarde'
import Plans from './Files/Plans'
import AskedQuestions from './Files/AskedQuestions'
import Become from './Files/Become'
import MyLearning from './Files/MyLearning'
import Footer from "../Homepage/Footer"
import NavbarCombined from '../Navbar/NavbarCombined'


export default function SignUpPage() {
  return (
    <>
     <NavbarCombined/>
      <div className='pt-[94px]'>
        <SignUpLink />
        <Become />
        <MyLearning />
        <Acheivement />
        <PublicProfile />
        <W3Community />
        <W3Spaces />
        <WantToUpgarde />
        <Plans />
        <AskedQuestions />
        <Footer />
      </div>
    </>
  )
}
