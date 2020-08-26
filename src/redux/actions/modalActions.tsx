import { SET_MODAL_TYPE } from '../../types';

export const setModalType = (modalType?: string) => {
  if (modalType) {
    return {
      type: SET_MODAL_TYPE,
      payload: modalType,
    };
  }
  return {
    type: SET_MODAL_TYPE,
    payload: null,
  };
};
