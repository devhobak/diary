module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['setupTests.ts', 'jest-styled-components'],
    moduleDirectories: ['node_modules', 'provider-utils'],
    testMatch: ['<rootDir>/src/test/**/*.test.ts'],
};
