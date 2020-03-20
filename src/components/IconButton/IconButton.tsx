import React from 'react';
import './IconButton.scss';

type Props = {
  image: string;
  alt: string;
  tabCheck: boolean;
  onClick: () => void;
};

const IconButton = ({ image, alt, tabCheck, onClick }: Props) => (
  <button
    onClick={onClick}
    type="button"
    className={tabCheck ? 'button-container tab-outlining' : 'button-container'}
  >
    <img src={image} alt={alt} className="icon" />
  </button>
);

export default IconButton;
