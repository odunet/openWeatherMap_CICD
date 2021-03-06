import { types } from '../types';

// load data
export const loadData_Action = (data) => ({
  type: types.Load_Data,
  data: data,
});

// change temperature units
export const changeUnits_Action = (data) => ({
  type: types.Change_Units,
  data: data,
});

// toggle wind on and off
export const displayWind_Action = (data) => ({
  type: types.Display_Wind,
  data: data,
});

// Change display title
export const changeTitle_Action = (data) => ({
  type: types.Change_Title,
  data: data,
});
