module.exports = {
    testEnvironment: 'jsdom',

    reporters: [
      'default',
      ['jest-html-reporter', {
        pageTitle: 'Test Report',
        outputPath: 'reports/test-report.html',
        expand: true,
      }]
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
      },
      moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/file-mock.js"

     },
     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
     setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  };
  