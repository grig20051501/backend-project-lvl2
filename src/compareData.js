/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const formObj = (keys, obj) => {
  const result = keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
  return result;
};

const getData = (filepath) => JSON.parse(readFileSync(filepath));

const sortObj = (obj) => {
  const keys = _.sortBy(Object.keys(obj));
  const result = formObj(keys, obj);
  return result;
};

const compareData = (firstPath, secondPath) => {
  const dataFirst = sortObj(getData(path.resolve(firstPath)));
  const dataSecond = sortObj(getData(path.resolve(secondPath)));
  const keys = _.union(Object.keys(dataFirst), Object.keys(dataSecond));

  const result = `{\n${keys.reduce((acc, key) => {
    if (dataFirst[key] === dataSecond[key]) {
      acc += `    ${key}: ${dataFirst[key]}\n`;
    } else if (!Object.hasOwn(dataFirst, key)) {
      acc += `  + ${key}: ${dataSecond[key]}\n`;
    } else if (!Object.hasOwn(dataSecond, key)) {
      acc += `  - ${key}: ${dataFirst[key]}\n`;
    } else {
      acc += `  - ${key}: ${dataFirst[key]}\n`;
      acc += `  + ${key}: ${dataSecond[key]}\n`;
    }
    return acc;
  }, '')}}`;
  return result;
};
export default compareData;
