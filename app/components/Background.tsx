import React from 'react';

const Background: React.FC = (): any => {
  return (
    <>
        <video className='absolute h-full object-none w-full -z-50' autoPlay loop muted>
            <source src="../../../yae1080.mp4" type='video/mp4' />
        </video>
    </>
  );
};

export default Background;
