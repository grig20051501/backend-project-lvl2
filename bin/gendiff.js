#!/usr/bin/env node
import { Command } from 'commander';

// eslint-disable-next-line import/extensions
import compareData from '../src/compareData.js';

const program = new Command();
program.description('Compares two configuration files and showes a difference')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format', 'output format');
program.parse();

const getPath = (numOfPath) => program.args[numOfPath];

const path1 = getPath(0);
const path2 = getPath(1);

const difference = compareData(path1, path2);
// eslint-disable-next-line no-console
program.action(console.log(difference));
export default difference;
