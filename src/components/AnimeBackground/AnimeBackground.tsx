import React from 'react';
import Background from '../../assets/images/anime-bg.jpg';

const AnimeBackground = ({ children }: any) => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full blur-4 absolute"
        style={{ backgroundImage: `url(${Background})`, filter: 'blur(4px)' }}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0">{children}</div>
    </>
  );
};

export default AnimeBackground;
