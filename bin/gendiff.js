#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const getData = (filepath) => path.resolve(readFileSync(filepath));

const getPath = (program, numOfPath) => program.args[numOfPath - 1];

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
/* const compareData = (dataFirst, dataSecond) => {

} */
