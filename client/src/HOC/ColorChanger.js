import React from 'react';
// This is a HOC which gives the component power to give random color to the text from materialize css.

const ColorChanger = (ProspectComponent) => {

  /*This color is array which contains different names of colors which we want to change*/
  const color = ['red', 'navy', 'violet', 'crimson', 'maroon']
  const randomColor = color[Math.floor(Math.random() * 5)];
  // materialize css use <color>-text to give text it's color so we pick the name from array randomly to give color to text
  const className = randomColor + '-text';

return (props) => {
      return (
          <div className={className}>
              <ProspectComponent {...props}/>
          </div>
    )
  }
}

export default ColorChanger;
