import React from 'react';
import './IconButton.scss';

type Props = {
  image: string;
  alt: string;
  tabCheck: boolean;
  onClick: () => void;
  isDisabled?: boolean;
};

const getClasses = (isTabbing: boolean, buttonDisabled: boolean) => {
  let classes = 'button-container';

  if (isTabbing) classes = `${classes} tab-outling`;
  if (buttonDisabled) classes = `${classes} is-disabled`;

  return classes;
};

const IconButton = ({
  image,
  alt,
  tabCheck,
  isDisabled = false,
  onClick
}: Props) => (
  <button
    onClick={onClick}
    type="button"
    className={getClasses(tabCheck, isDisabled)}
    disabled={isDisabled}
  >
    <img src={image} alt={alt} className="icon" />
  </button>
);

export default IconButton;
