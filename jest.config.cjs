module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest',
      {
        tsconfig: {
          allowJs: true,
        }
      }
    ],
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file',
  },
  
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.tsx',
    '!**/*.interface.ts',
  ],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
  }
}
