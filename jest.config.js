module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/pages/**/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
