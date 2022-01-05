module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.ts(x)?', 'src/**/test.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '@(.*)': [
      '<rootDir>/src/$1',
      '<rootDir>/node_modules/$1',
      '<rootDir>/node_modules/@$1'
    ]
  }
}
