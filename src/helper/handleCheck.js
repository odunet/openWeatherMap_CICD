export const handleCheck = (dispatch, setState, action, target) => {
  setState(target.value);
  if (target.value === 'C') {
    dispatch(action(true));
  } else {
    dispatch(action(false));
  }
};

export const handleCheckWind = (dispatch, setState, action, target) => {
  setState(target.value);
  if (target.value === 'on') {
    dispatch(action(true));
  } else {
    dispatch(action(false));
  }
};
