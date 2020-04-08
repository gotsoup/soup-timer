import React from 'react';
import classNames from 'classnames';

import './IconButton.scss';

type Props = {
  image: string;
  alt: string;
  tabCheck: boolean;
  onClick: () => void;
  isDisabled?: boolean;
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
    className={classNames(
      'button-container',
      { 'tab-outlining': tabCheck },
      { 'is-disabled': isDisabled }
    )}
    disabled={isDisabled}
  >
    <img src={image} alt={alt} className="icon" />
  </button>
);

export default IconButton;
