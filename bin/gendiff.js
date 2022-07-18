#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program.description('Compares two configuration files and showes a difference')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format', 'output format');
program.parse();
