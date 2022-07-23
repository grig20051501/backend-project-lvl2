#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import compareData from '../src/compareData.js';

const program = new Command();
program.description('Compares two configuration files and showes a difference')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format', 'output format');
program.parse();

const getData = (filepath) => JSON.parse(readFileSync(filepath));
const getPath = (numOfPath) => path.resolve(program.args[numOfPath]);

const path1 = getPath(0);
const path2 = getPath(1);
const data1 = getData(path1);
const data2 = getData(path2);

const result = compareData(data1, data2);
// eslint-disable-next-line no-console
program.action(console.log(result));

export default result;

// TODO: Отсортировать строку, экспортировать
