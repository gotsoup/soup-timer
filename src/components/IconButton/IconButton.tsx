import React from 'react';
import './IconButton.scss';

type Props = {
  image: string,
  alt: string,
  onClick: () => void
};

const IconButton = ({ image, alt, onClick } : Props) => (
  <button onClick={onClick} type="button" className='buttonContainer'>
    <img src={image} alt={alt} className='icon' />
  </button>
);

export default IconButton;
