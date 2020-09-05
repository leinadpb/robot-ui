import React, { useState, useEffect } from 'react';
import { PatientsWrapper, PatientList, PatientBox, FormWrapper, Action, Actions, CreateBar, LimitMsg, PatientAction, PatientBoxWithAction } from './Patients.styles';
import AppResalter from '../../components/resalter/AppResalter';
import usePatientAPI from '../../api/patientAPI';
import Spinner from '@chakra-ui/core/dist/Spinner';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/core';
import { BsArrowBarRight } from 'react-icons/bs';

const PatientForm = ({ patient, updatedPatient, deletedPatient, createdPatient }) => {
  const [name, setName] = useState(!!patient ? patient.fullName : '');
  const [desc, setDesc] = useState(!!patient ? patient.description : '');
  const [loading, setLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  // APIs
  const { updatePatient, deletePatient, createPatient } = usePatientAPI();

  useEffect(() => {
    if (!patient) {
      setIsCreating(true);
    }
    // eslint-disable-next-line
  }, []);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeDesc = (e) => {
    setDesc(e.target.value);
  };

  const onUpdate = async () => {
    setLoading(true);
    let dto = {
      id: patient.id,
      fullName: name,
      description: desc,
    };
    let rs = await updatePatient(patient.id, dto);
    if (rs.success) {
      updatedPatient(dto);
    }
    setLoading(false);
  };

  const onRemove = async () => {
    setLoading(true);
    let rs = await deletePatient(patient.id);
    if (rs.success) {
      deletedPatient(patient.id);
    }
    setLoading(false);
  };

  const onCreate = async () => {
    if (!!name && !!desc && name.length > 0 && desc.length > 0) {
      setLoading(true);
      let rs = await createPatient({
        fullName: name,
        description: desc,
      });
      if (rs.success) {
        createdPatient(rs.data);
      }
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormControl>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <Input type="text" id="name" value={name} onChange={changeName} />
      </FormControl>
      <FormControl style={{ marginTop: '8px' }}>
        <FormLabel htmlFor="name">Descripcion</FormLabel>
        <Input type="text" id="name" value={desc} onChange={changeDesc} />
      </FormControl>
      <Actions>
        {!!isCreating ? (
          <Action onClick={onCreate} disabled={loading}>
            <span>Crear</span>
          </Action>
        ) : (
          <>
            <Action onClick={onUpdate} disabled={loading}>
              <span>Guardar</span>
            </Action>
            <Action onClick={onRemove} disabled={loading}>
              <span>Eliminar</span>
            </Action>
          </>
        )}
      </Actions>
    </FormWrapper>
  );
};

const Patients = ({ handleSelectedPatient }) => {
  const [showResalter, setShowResalter] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  // APIs
  const { getAll } = usePatientAPI();

  useEffect(() => {
    const fetch = async () => {
      let rs = await getAll();
      if (rs.success) {
        setPatients(rs.data);
      }
      setLoading(false);
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  const handleClick = (patient) => {
    setSelectedPatient(patient);
    setShowResalter(true);
  };

  const handleUpdate = (dto) => {
    let pats = [...patients];
    pats.forEach((p) => {
      if (dto.id === p.id) {
        p.fullName = dto.fullName;
        p.description = dto.description;
      }
    });
    setPatients(pats);
    setShowResalter(false);
  };

  const handleDelete = (id) => {
    let pats = [...patients].filter((x) => x.id !== id);
    setPatients(pats);
    setShowResalter(false);
  };

  const handleCreate = (dto) => {
    let pats = [...patients];
    pats.push({
      id: dto.id,
      fullName: dto.fullName,
      description: dto.description,
    });
    setPatients(pats);
    setShowResalter(false);
  };

  const initWithPatient = (p) => {
    handleSelectedPatient(p);
  };

  if (loading) {
    return <Spinner color="red.500" />;
  }

  return (
    <>
      <PatientsWrapper>
        <CreateBar>
          {patients.length >= 3 ? (
            <LimitMsg>
              <span>Has alcanzado el limite de pacientes permitido para esta cuenta.</span>
            </LimitMsg>
          ) : (
            <Button onClick={() => handleClick(undefined)}>Crear nuevo</Button>
          )}
        </CreateBar>

        <PatientList>
          {patients.length === 0 ? (
            <LimitMsg>
              <span>Crea un paciente para iniciar las terapias</span>
            </LimitMsg>
          ) : undefined}
          {patients.map((p) => (
            <PatientBoxWithAction key={p.id}>
              <PatientBox onClick={() => handleClick(p)}>
                <span>{p.fullName}</span>
              </PatientBox>
              <PatientAction>
                <BsArrowBarRight onClick={() => initWithPatient(p)} />
              </PatientAction>
            </PatientBoxWithAction>
          ))}
        </PatientList>
      </PatientsWrapper>
      <AppResalter
        customContent={<PatientForm patient={selectedPatient} createdPatient={handleCreate} updatedPatient={handleUpdate} deletedPatient={handleDelete} />}
        show={showResalter}
        onClose={() => setShowResalter(false)}
      />
    </>
  );
};

export default Patients;
