import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppTemplateWrapper } from './AppTemplate.styles';

const AppTemplate = ({ children }) => {
  const location = useLocation();
  const [useTemplate, setUseTemplate] = useState(true);

  useEffect(() => {
    if (location.pathname.includes('auth') || location.pathname.includes('about')) {
      setUseTemplate(false);
    }
  }, [location.pathname]);

  if (useTemplate) {
    return (
      <AppTemplateWrapper>
        <div>Header bar</div>
        <div>{children}</div>
        <div>Footer bar</div>
      </AppTemplateWrapper>
    );
  }

  return children;
};

export default AppTemplate;
