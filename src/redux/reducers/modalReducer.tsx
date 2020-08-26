import { ModalState, ModalActionsTypes, SET_MODAL_TYPE } from '../../types';

const modalInitalState: ModalState = {
  modalType: '',
};

export function modalReducer(
  state: ModalState = modalInitalState,
  action: ModalActionsTypes
): ModalState {
  switch (action.type) {
    case SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
      };

    default:
      return state;
  }
}
