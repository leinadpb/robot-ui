import React from 'react';
import { ResalterImage, AppResalterWrapper, ResalterContent, ResalterControl, AppResalterModal, CloseIconBox } from './AppResalter.styles';
import { BsX } from 'react-icons/bs';
import SoundIcon from '../../images/sound_icon.png';

const CLICABLE_AREA_ID = 'clicable_area_id';

const AppResalter = ({ onClose, show, topContent, bottomContent, sound = false }) => {
  const hanldeClose = (e) => {
    if (!!e) {
      if (!!e.target.id && CLICABLE_AREA_ID === e.target.id) {
        if (!!onClose) {
          onClose();
        }
      }
    } else {
      if (!!onClose) {
        onClose();
      }
    }
  };

  if (!show) {
    return <></>;
  }

  return (
    <AppResalterWrapper onClick={(e) => hanldeClose(e)} id={CLICABLE_AREA_ID}>
      <AppResalterModal>
        <ResalterContent>
          <CloseIconBox>
            <BsX onClick={() => hanldeClose()} />
          </CloseIconBox>
          <ResalterImage>
            <img src={topContent} alt="functionality icon" />
          </ResalterImage>
          <ResalterControl>
            {!!sound && <img src={SoundIcon} alt="volumen" style={{ maxWidth: '20%' }} />}
            {bottomContent}
          </ResalterControl>
        </ResalterContent>
      </AppResalterModal>
    </AppResalterWrapper>
  );
};

export default AppResalter;
