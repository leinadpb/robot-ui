import { executeRequestSync, useAPI } from './API';

const getAllOptions = () => {
  return {
    method: 'GET',
    url: '/v1/patient',
    updateStore: false,
  };
};

const getSingleOptions = (id) => {
  return {
    method: 'GET',
    url: `/v1/patient/${id}`,
    updateStore: false,
  };
};

const createOptions = (dto) => {
  return {
    method: 'POST',
    url: '/v1/patient',
    data: dto,
    updateStore: false,
  };
};

const updateOptions = (id, dto) => {
  return {
    method: 'PUT',
    url: `/v1/patient/${id}`,
    data: dto,
    updateStore: false,
  };
};

const deleteOptions = (id) => {
  return {
    method: 'DELETE',
    url: `/v1/patient/${id}`,
    updateStore: false,
  };
};

const updateVisualOptions = (id, amount) => {
  return {
    method: 'GET',
    url: `/v1/patient/progress/visual/${id}/${amount}`,
    updateStore: false,
  };
};

const updateTouchOptions = (id, amount) => {
  return {
    method: 'GET',
    url: `/v1/patient/progress/touch/${id}/${amount}`,
    updateStore: false,
  };
};

const updateVestibularOptions = (id, amount) => {
  return {
    method: 'GET',
    url: `/v1/patient/progress/vestibular/${id}/${amount}`,
    updateStore: false,
  };
};

const updateAuditiveOptions = (id, amount) => {
  return {
    method: 'GET',
    url: `/v1/patient/progress/auditive/${id}/${amount}`,
    updateStore: false,
  };
};

const usePatientAPI = () => {
  const { token } = useAPI();
  return {
    getAll: () => executeRequestSync(token, getAllOptions()),
    getSingle: (id) => executeRequestSync(token, getSingleOptions(id)),
    createPatient: (dto) => executeRequestSync(token, createOptions(dto)),
    updatePatient: (id, dto) => executeRequestSync(token, updateOptions(id, dto)),
    deletePatient: (id) => executeRequestSync(token, deleteOptions(id)),
    updateVisual: (id, amount) => executeRequestSync(token, updateVisualOptions(id, amount)),
    updateTouch: (id, amount) => executeRequestSync(token, updateTouchOptions(id, amount)),
    updateVestibular: (id, amount) => executeRequestSync(token, updateVestibularOptions(id, amount)),
    updateAuditive: (id, amount) => executeRequestSync(token, updateAuditiveOptions(id, amount)),
  };
};

export default usePatientAPI;
