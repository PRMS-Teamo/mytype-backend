/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.spec\\.ts$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    ".*\\.spec\\.ts\\.disabled$",
    ".*redis.*\\.spec\\.ts$",
  ],
  transform: {
    "^.+\\.(t|j)s$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@config/(.*)$": "<rootDir>/src/infrastructure/config/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@common/(.*)$": "<rootDir>/src/apis/shared/common/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@postgres-client$": "<rootDir>/generated/postgres-client",
    "^@mongo-client$": "<rootDir>/generated/mongo-client",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
};

module.exports = config;
