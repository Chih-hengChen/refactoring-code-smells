export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {},
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            useESM: true, // 启用 ESM 支持
        },
    },
    testMatch: ['<rootDir>/src/**/*.test.ts'],
};