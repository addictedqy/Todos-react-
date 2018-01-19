// 增删数组
const ADD_ITEM = 'ADD_ITEM';
const DEL_ITEM = 'DEL_ITEM';
const CHANGE_CHECKED = 'CHANGE_CHECKED';
const ALL_CHECKED = 'ALL_CHECKED';
const ALL_UNCHECKED = 'ALL_UNCHECKED';
const REMOVE_LIST = 'REMOVE_LIST';

export const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat([{title: action.payload, checked: false}]);

    case DEL_ITEM:
      const newState = state.concat([]);
      newState.splice(action.payload, 1);
      return newState;

    case CHANGE_CHECKED:
      const checkedState = state.concat([]);
      checkedState[action.payload].checked = !checkedState[action.payload].checked;
      return checkedState;

    case ALL_CHECKED:
      const allCheckedState = state.concat([]);
      return allCheckedState.map((item, i) => {
        return {
          title: item.title,
          checked: true,
        }
      });

    case ALL_UNCHECKED:
      const allUncheckedState = state.concat([]);
      return allUncheckedState.map((item, i) => {
        return {
          title: item.title,
          checked: false,
        }
      })
    
    case REMOVE_LIST:
      const removeListState = state.concat([]);
      let removeList = [];
      for (let i = 0; i < removeListState.length; i++) {
        if (removeListState[i].checked === false) {
          removeList.push(removeListState[i])
        }
      }
      return removeList;
  }
  return state;
}

export const addAction = (value) => {
  return {
    type: ADD_ITEM,
    payload: value,
  }
}

export const delAction = (value) => {
  return {
    type: DEL_ITEM,
    payload: value,
  }
}

// 单选
export const changeChecked = (index) => {
  return {
    type: CHANGE_CHECKED,
    payload: index,
  }
}

// 全选
export const allChecked = (index) => {
  return {
    type: ALL_CHECKED,
    payload: index,
  }
}

// 全不选
export const allUnchecked = (index) => {
  return {
    type: ALL_UNCHECKED,
    payload: index,
  }
}

// 清除所有已完成事项
export const removeList = (index) => {
  return {
    type: REMOVE_LIST,
    payload: index,
  }
}