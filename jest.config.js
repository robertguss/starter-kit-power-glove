module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['resources/js/**/*.js'],
  // coverageDirectory: 'coverage',
  moduleFileExtensions: ['js'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+spec.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
