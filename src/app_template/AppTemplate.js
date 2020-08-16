import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppTemplateWrapper, AccountArea, CameraArea, ContentArea, BackArea, HomeArea } from './AppTemplate.styles';
import { BsPerson, BsCamera, BsReply, BsHouse } from 'react-icons/bs';

const AppTemplate = ({ children }) => {
  const location = useLocation();
  const [useTemplate, setUseTemplate] = useState(true);

  useEffect(() => {
    // console.log('location change in template, ', location.pathname, useTemplate);
    if (location.pathname.includes('auth') || location.pathname.includes('about')) {
      setUseTemplate(false);
    } else {
      setUseTemplate(true);
    }
  }, [location]);

  if (useTemplate) {
    return (
      <AppTemplateWrapper>
        <AccountArea>
          <BsPerson />
        </AccountArea>
        <CameraArea>
          <BsCamera />
        </CameraArea>
        <ContentArea>{children}</ContentArea>
        <BackArea>
          <BsReply />
        </BackArea>
        <HomeArea>
          <BsHouse />
        </HomeArea>
      </AppTemplateWrapper>
    );
  }

  return children;
};

export default AppTemplate;
