#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const getData = (filepath) => readFileSync(filepath);

const getPath = (program, numOfPath) => path.resolve(program.args[numOfPath - 1]);

const program = new Command();
program.description('Compares two configuration files and showes a difference')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format', 'output format');
program.parse();

const path1 = getPath(program, 1);
const path2 = getPath(program, 2);
const data1 = JSON.parse(getData(path1));
const data2 = JSON.parse(getData(path2));
const compareData = (dataFirst, dataSecond) => {
  let result = '';
  for (const key of Object.keys(dataFirst)) {
    if (!dataSecond.hasOwnProperty(key)) {
      result += `- ${key}: ${dataFirst[key]} \n`;
    } else {
      if (dataFirst[key] !== dataSecond[key]) {
        result += `- ${key}: ${dataFirst[key]} \n`;
        result += `+ ${key}: ${dataSecond[key]} \n`;
      } else {
        result += `  ${key}: ${dataSecond[key]} \n`;
      }
    }
  } for (const key of Object.keys(dataSecond)) {
    if (!dataFirst.hasOwnProperty(key)) {
      result += `+ ${key}: ${dataSecond[key]} \n`;
    }
  }
  return result;
};
// TODO: Отсортировать строку, закинуть всё в program.action, экспортировать
