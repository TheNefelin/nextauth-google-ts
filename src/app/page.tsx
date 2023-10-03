
import React from 'react'

const Home = () => {
   return (
    <div>
      <iframe
        width="450"
        height="250"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBl6eTg57zgqjCcoCIJFMaaE3038aAUQIA&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Home