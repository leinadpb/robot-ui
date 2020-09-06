import React, { useState } from 'react';
import { ProgressWrapper } from './Progress.styles';
import ProgressComponent from './ProgressComponent';
import usePatientAPI from '../../../api/patientAPI';

const Progress = ({ selectedPatient, onUpdateProgress }) => {
  const [visual, setVisual] = useState(!!selectedPatient && !!selectedPatient.visualProgress ? selectedPatient.visualProgress : 0);
  const [tactil, setTactil] = useState(!!selectedPatient && !!selectedPatient.touchProgress ? selectedPatient.touchProgress : 0);
  const [auditivo, setAuditivo] = useState(!!selectedPatient && !!selectedPatient.auditiveProgress ? selectedPatient.auditiveProgress : 0);
  const [vestibular, setVestibular] = useState(!!selectedPatient && !!selectedPatient.vestibularProgress ? selectedPatient.vestibularProgress : 0);

  // APIs
  const { updateAuditive, updateTouch, updateVestibular, updateVisual } = usePatientAPI();

  const handleVisualChange = async (amount, idx) => {
    let rs = await updateVisual(selectedPatient.id, amount);
    if (rs.success) {
      setVisual(amount);
      onUpdateProgress({
        ...selectedPatient,
        visualProgress: amount,
      });
    }
  };

  const handleTactilChange = async (amount, idx) => {
    let rs = await updateTouch(selectedPatient.id, amount);
    if (rs.success) {
      setTactil(amount);
      onUpdateProgress({
        ...selectedPatient,
        touchProgress: amount,
      });
    }
  };

  const handleVestibularChange = async (amount, idx) => {
    let rs = await updateVestibular(selectedPatient.id, amount);
    if (rs.success) {
      setVestibular(amount);
      onUpdateProgress({
        ...selectedPatient,
        vestibularProgress: amount,
      });
    }
  };

  const handleAuditiveChange = async (amount, idx) => {
    let rs = await updateAuditive(selectedPatient.id, amount);
    if (rs.success) {
      setAuditivo(amount);
      onUpdateProgress({
        ...selectedPatient,
        auditiveProgress: amount,
      });
    }
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
