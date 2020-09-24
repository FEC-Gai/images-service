module.exports = {
  setupFiles: ['<rootDir>/testing/api.test.js'],
  verbose: true,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ]
};