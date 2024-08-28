module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    // because react deps are peer deps , you need
    // to map them somewhere, so change this to where
    // react deps are installed in your project
    moduleNameMapper: {
      '^react-dom/server$': '<rootDir>/../../react-dom/server',
      '^react$': '<rootDir>/../../react'
    }
  }
  