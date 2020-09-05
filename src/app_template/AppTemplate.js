import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { AppTemplateWrapper, AccountArea, CameraArea, ContentArea, BackArea, HomeArea, LogoWrapper, ContentScreen, PatientInfo } from './AppTemplate.styles';
import { BsPerson, BsReply, BsHouse } from 'react-icons/bs';
import RobiLOGO from '../images/LOGO_ROBI.svg';
import Sidebar from '../components/Sidebar/Sidebar';

const AppTemplate = ({ children, user, selectedPatient }) => {
  const history = useHistory();
  const location = useLocation();
  const [useTemplate, setUseTemplate] = useState(true);
  const [sidebar, showSidebar] = useState(false);

  useEffect(() => {
    // console.log('location change in template, ', location.pathname, useTemplate);
    if (location.pathname.includes('auth') || location.pathname.includes('about')) {
      setUseTemplate(false);
    } else {
      setUseTemplate(true);
    }
  }, [location]);

  const goToHome = () => {
    if (!!selectedPatient) {
      history.push('/app/home');
    } else {
      history.push('/app/');
    }
  };

  if (useTemplate) {
    return (
      <>
        {!!sidebar && <Sidebar showSidebar={showSidebar} user={user} />}
        <AppTemplateWrapper>
          <AccountArea onClick={() => showSidebar(true)}>
            <BsPerson />
          </AccountArea>
          <PatientInfo>
            <span>{!!selectedPatient ? selectedPatient.fullName : ''}</span>
          </PatientInfo>
          <CameraArea>{/* <BsCamera /> */}</CameraArea>
          <ContentArea>
            <LogoWrapper>
              <img src={RobiLOGO} alt="ROBI" />
            </LogoWrapper>
            <ContentScreen>{children}</ContentScreen>
          </ContentArea>
          <BackArea onClick={() => history.goBack()}>
            <BsReply />
          </BackArea>
          <HomeArea onClick={() => goToHome()}>
            <BsHouse />
          </HomeArea>
        </AppTemplateWrapper>
      </>
    );
  }

  return children;
};

export default AppTemplate;
