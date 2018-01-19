// 修改input输入框状态
const CHANGE_INPUTING = 'CHANGE_INPUTIN';

export const inputingReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_INPUTING:
      return action.payload;
  }
  return state;
}

export const changeInputingAction = (value) => {
  return {
    type: CHANGE_INPUTING,
    payload: value,
  }
}