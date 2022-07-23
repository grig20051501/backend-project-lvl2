import _ from 'lodash';

const compareData = (dataOne, dataTwo) => {
  let result = '';
  const dataFirst = dataOne;
  const dataSecond = dataTwo;
  for (const key of Object.keys(dataFirst)) {
    if (!_.has(dataSecond, key)) {
      result += `- ${key}: ${dataFirst[key]} \n`;
    } else if (dataFirst[key] !== dataSecond[key]) {
      result += `- ${key}: ${dataFirst[key]} \n`;
      result += `+ ${key}: ${dataSecond[key]} \n`;
    } else {
      result += `  ${key}: ${dataSecond[key]} \n`;
    }
  } for (const key of Object.keys(dataSecond)) {
    if (!_.has(dataFirst, key)) {
      result += `+ ${key}: ${dataSecond[key]} \n`;
    }
  }

  return result.split('/n').sort().toString();
};

export default compareData;
