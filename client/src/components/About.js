import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

// We are creating functional components because we are not storing any states over here.

const About = () => {

return(

      <div className="boxstyle">
          <div className='container'>
              <h4>  This website is just an addition to one of those hundreds of websites made everyday, the only difference you will find is that this website will
              make you develop a connection through the words, phrases, sentences. This surely may not be the the best of all, but it is truely the one that has
              been born from the deepest core of my heart and my brain expressed in form of Social awareness . With due respect and love , Folks !! welcome to not my,
              but your Blog !! </h4>
          </div>
      </div>
  )
}

export default ColorChanger(About); /*ColorChanger as we want to change color whenever we refresh it again*/
