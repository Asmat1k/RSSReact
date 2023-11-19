module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/__tests__/*.(test|spec).[jt]s?(x)'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
    '**/src/**/*.js',
    '!**/api/api.ts',
    '!**/node_modules/**',
    '!**/main.tsx',
    '!**/*.d.ts',
    '!**/utils/**/*.ts?(x)',
    '!**/utils/*.ts',
  ],
};
