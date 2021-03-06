import Init from 'store/Init';

const rootReducer = (state = Init, { type, payload }) => {
  switch (type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        data: [
          ...state.data.filter((item) => {
            return item.id !== payload;
          }),
        ],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        data: [...state.data, { id: state.data.length, ...payload }],
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        data: [...state.data.map((item, idx) => (idx === payload.id ? payload : item))],
      };
    case 'NOTIFICATION':
      return {
        ...state,
        notification: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
