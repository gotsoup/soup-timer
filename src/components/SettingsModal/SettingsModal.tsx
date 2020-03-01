import React from 'react';
import './SettingsModal.scss';
import '../IconButton..tsx';
import IconButton from '../IconButton/IconButton';
import minusIcon from '../../assets/images/minus.svg';
import plusIcon from '../../assets/images/plus.svg';

type Props = {
  modifyTime: (addTime: boolean) => void;
  applyChanges: () => void;
};

const SettingsModal = ({ modifyTime, applyChanges }: Props) => (
  <div id="overlay-background">
    <div id="settings-overlay">
      <div id="settings-option-container">
        <div className="setting-option">
          <h4>Session</h4>
          <div className="session-controls session">
            <IconButton
              image={minusIcon}
              alt="minus icon"
              onClick={() => modifyTime(false)}
            />
            <h3 id="session-time">25</h3>
            <IconButton
              image={plusIcon}
              alt="plus icon"
              onClick={() => modifyTime(true)}
            />
          </div>
        </div>
        <div className="setting-option">
          <h4>Break</h4>
          <div className="session-controls break">
            <IconButton
              image={minusIcon}
              alt="minus icon"
              onClick={() => modifyTime(false)}
            />
            <h3 id="break-time">5</h3>
            <IconButton
              image={plusIcon}
              alt="plus icon"
              onClick={() => modifyTime(true)}
            />
          </div>
        </div>
      </div>
      <button type="button" id="apply" onClick={applyChanges}>
        Apply
      </button>
    </div>
  </div>
);

export default SettingsModal;
