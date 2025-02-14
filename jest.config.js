// jest.config.js
const nextJest = require('next/jest');

// Cria uma configuração customizada do Jest
const createJestConfig = nextJest({
  // Caminho para o diretório do Next.js
  dir: './',
});

// Configuração personalizada do Jest
const customJestConfig = {
  testEnvironment: 'jsdom', // Ambiente de teste para aplicações web
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Arquivo de configuração adicional
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapeamento de aliases (se usado)
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'], // Ignora pastas
};

// Exporta a configuração customizada
module.exports = createJestConfig(customJestConfig);