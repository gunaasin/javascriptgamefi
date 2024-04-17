import React, { useEffect, useState } from 'react';
import '../Game/Game.css';
import { ChildComponent } from '../componentcount/Component1';

export const Rabitrun = (prop) => {
  const [className, setClassName] = useState('');

  useEffect(() => {
    // Update className based on prop.styles
    console.log('prop.styles:', prop.styles);
    setClassName(prop.styles == 'play' ? 'noplay' : 'play');
  }, [prop.styles]);

  return (
    <>
      <div className={className}>
        <iframe
          src={prop.game}
          
          height="380"
          width="675"
          title="Iframe Example"
        ></iframe>
        {console.log(prop.styles)}
      </div>
    </>
  );
};
