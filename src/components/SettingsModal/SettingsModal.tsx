import React from 'react';
import './SettingsModal.scss';
import IconButton from '../IconButton/IconButton';
import minusIcon from '../../assets/images/minus.svg';
import plusIcon from '../../assets/images/plus.svg';

type Props = {
  modifyTime: (addTime: boolean, isSessionMinutes: boolean) => void;
  closeModal: (OpenModal: boolean) => void;
  sessionMinutes: number;
  breakMinutes: number;
  tabCheck: boolean;
};



const SettingsModal = ({
  modifyTime,
  closeModal,
  sessionMinutes,
  breakMinutes,
  tabCheck
}: Props) => (
  <div id="overlay-background">
    <div id="settings-overlay">
      <div id="settings-option-container">
        <div className="setting-option">
          <h4>Session</h4>
          <div className="session-controls session">
            <IconButton
              image={minusIcon}
              alt="minus icon"
              tabCheck={tabCheck}
              onClick={() => modifyTime(false, true)}
              isDisabled= {sessionMinutes < 10 ? true : false}
            />
            <h3 id="session-time">{sessionMinutes}</h3>
            <IconButton
              image={plusIcon}
              alt="plus icon"
              tabCheck={tabCheck}
              onClick={() => modifyTime(true, true)}
              isDisabled= {sessionMinutes > 55 ? true : false}
            />
          </div>
        </div>
        <div className="setting-option">
          <h4>Break</h4>
          <div className="session-controls break">
            <IconButton
              image={minusIcon}
              alt="minus icon"
              tabCheck={tabCheck}
              onClick={() => modifyTime(false, false)}
              isDisabled= {breakMinutes < 10 ? true : false}
            />
            <h3 id="break-time">{breakMinutes}</h3>
            <IconButton
              image={plusIcon}
              alt="plus icon"
              tabCheck={tabCheck}
              onClick={() => modifyTime(true, false)}
              isDisabled= {breakMinutes > 55 ? true : false}
            />
          </div>
        </div>
      </div>
      <button type="button" id="apply" onClick={() => closeModal(false)}>
        Apply
      </button>
    </div>
  </div>
);

export default SettingsModal;
