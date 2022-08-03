import { test, expect } from '@jest/globals';
import compareData from '../src/compareData';

const res = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
test(compareData, () => {
  expect(compareData('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(res);
});
