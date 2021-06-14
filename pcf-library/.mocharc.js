process.env.NODE_ENV = 'test';

module.exports = {
  require: 'ts-node/register/transpile-only',
  extension: ['ts'],
  watchExtensions: ['ts'],
  spec: ['src/tests/*.test.ts', 'src/**/*.test.ts'],
}