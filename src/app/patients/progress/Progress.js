import React, { useState } from 'react';
import { ProgressWrapper } from './Progress.styles';
import ProgressComponent from './ProgressComponent';

const Progress = ({ selectedPatient }) => {
  const [visual, setVisual] = useState(!!selectedPatient && !!selectedPatient.visualProgress ? selectedPatient.visualProgress : 0);
  const [tactil, setTactil] = useState(!!selectedPatient && !!selectedPatient.touchProgress ? selectedPatient.touchProgress : 0);
  const [auditivo, setAuditivo] = useState(!!selectedPatient && !!selectedPatient.auditiveProgress ? selectedPatient.auditiveProgress : 0);
  const [vestibular, setVestibular] = useState(!!selectedPatient && !!selectedPatient.vestibularProgress ? selectedPatient.vestibularProgress : 0);

  const handleVisualChange = (amount, idx) => {
    console.log('visual change: ', amount, idx);
    setTimeout(() => {
      setVisual(amount);
    }, 150);
  };

  const handleTactilChange = (amount, idx) => {
    console.log('tactil change: ', amount, idx);
    setTimeout(() => {
      setTactil(amount);
    }, 150);
  };

  const handleVestibularChange = (amount, idx) => {
    console.log('visual change: ', amount, idx);
    setTimeout(() => {
      setVestibular(amount);
    }, 150);
  };

  const handleAuditiveChange = (amount, idx) => {
    console.log('auditive change: ', amount, idx);
    setTimeout(() => {
      setAuditivo(amount);
    }, 150);
  };

  return (
    <ProgressWrapper>
      <ProgressComponent title="Visual" current={visual} colorActive="#a985a7" colorInactive="#7e637d" onChange={handleVisualChange} />
      <ProgressComponent title="Auditivo" current={auditivo} colorActive="#f8c778" colorInactive="#565a66" onChange={handleAuditiveChange} />
      <ProgressComponent title="Tactil" current={tactil} colorActive="#53aada" colorInactive="#466281" onChange={handleTactilChange} />
      <ProgressComponent title="Vestibular" current={vestibular} colorActive="#eb8a81" colorInactive="#6c5560" onChange={handleVestibularChange} />
    </ProgressWrapper>
  );
};

export default Progress;
