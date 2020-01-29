module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Accessibilities',
    [
      {
        name: 'Rampa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Piso tátil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sinal sonoro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Accessibilities', null, {}),
};
