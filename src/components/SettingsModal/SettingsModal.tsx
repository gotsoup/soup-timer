import React from 'react';
import classNames from 'classnames';

import IconButton from '../IconButton/IconButton';

import minusIcon from '../../assets/images/minus.svg';
import plusIcon from '../../assets/images/plus.svg';

import './SettingsModal.scss';

type Props = {
  modifyTime: (addTime: boolean, isSessionMinutes: boolean) => void;
  closeModal: (OpenModal: boolean) => void;
  sessionMinutes: number;
  breakMinutes: number;
  tabCheck: boolean;
};

type TimeOptionProps = {
  title: string;
  tabCheck: boolean;
  minutes: number;
  modifyTime: (addTime: boolean, isSessionMinutes: boolean) => void;
  isSession: boolean;
};

const TimeOption = ({
  title,
  tabCheck,
  minutes,
  modifyTime,
  isSession,
}: TimeOptionProps) => (
  <div className="flex-column">
    <h4 className="option-title">{title}</h4>
    <div className={'flex-row'}>
      <IconButton
        image={minusIcon}
        alt="minus icon"
        tabCheck={tabCheck}
        onClick={() => modifyTime(false, isSession)}
        isDisabled={minutes < 10}
      />
      <h3 className="minutes">{minutes}</h3>
      <IconButton
        image={plusIcon}
        alt="plus icon"
        tabCheck={tabCheck}
        onClick={() => modifyTime(true, isSession)}
        isDisabled={minutes > 55}
      />
    </div>
  </div>
);

const SettingsModal = ({
  modifyTime,
  closeModal,
  sessionMinutes,
  breakMinutes,
  tabCheck,
}: Props) => (
  <div className={classNames('flex-column', 'overlay-background')}>
    <div className={classNames('flex-column', 'settings-overlay')}>
      <div className={classNames('flex-row', 'settings-option-container')}>
        <TimeOption
          title={'Session'}
          tabCheck={tabCheck}
          minutes={sessionMinutes}
          modifyTime={modifyTime}
          isSession
        />
        <TimeOption
          title={'Break'}
          tabCheck={tabCheck}
          minutes={breakMinutes}
          modifyTime={modifyTime}
          isSession={false}
        />
      </div>
      <button type="button" className="apply" onClick={() => closeModal(false)}>
        Apply
      </button>
    </div>
  </div>
);

export default SettingsModal;
