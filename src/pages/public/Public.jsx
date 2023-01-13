import React from 'react'
import Header from '../../containers/header/Header'
import Navbar from '../../containers/navbar/Navbar'
import Services from '../../containers/services/Services'
import Video from '../../containers/video/Video'
export const Public = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Services/>
        <Video /> 
    </>
  )
}
