/* eslint-disable no-param-reassign */
import _ from 'lodash';

const formObj = (keys, obj) => {
  const result = keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
  return result;
};

const sort = (obj) => {
  const keys = _.sortBy(Object.keys(obj));
  const result = formObj(keys, obj);
  return result;
};

const compareData = (dataOne, dataTwo) => {
  const dataFirst = sort(dataOne);
  const dataSecond = sort(dataTwo);
  const keys = _.union(Object.keys(dataFirst), Object.keys(dataSecond));

  const result = `{\n${keys.reduce((acc, key) => {
    if (dataFirst[key] === dataSecond[key]) {
      acc += `    ${key}: ${dataFirst[key]} \n`;
    } else if (!Object.hasOwn(dataFirst, key)) {
      acc += `  + ${key}: ${dataSecond[key]} \n`;
    } else if (!Object.hasOwn(dataSecond, key)) {
      acc += `  - ${key}: ${dataFirst[key]} \n`;
    } else {
      acc += `  - ${key}: ${dataFirst[key]} \n`;
      acc += `  + ${key}: ${dataSecond[key]} \n`;
    }
    return acc;
  }, '')}}`;
  return result;
};
export default compareData;
