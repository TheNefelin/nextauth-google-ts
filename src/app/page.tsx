
import React from 'react'

const Home = () => {
   return (
    <div>
      <iframe
        width="450"
        height="250"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_API_KEY}&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways`}
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Home