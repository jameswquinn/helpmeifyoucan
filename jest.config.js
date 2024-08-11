module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
    '^react$': 'preact/compat',
    '^react-dom$': 'preact/compat'
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/src/**/*.(test|spec).[jt]s?(x)'],
};
