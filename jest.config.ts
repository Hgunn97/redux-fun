export default {
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  roots: ['<rootDir>/src'],
  transform: { '^.+``.tsx?$': 'ts-jest' },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json']
};
