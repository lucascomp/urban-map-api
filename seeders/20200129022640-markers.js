module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Markers',
    [
      {
        userId: 1,
        accessibilityId: 1,
        lat: -22.909299,
        lng: -43.182624,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        accessibilityId: 2,
        lat: -22.913893,
        lng: -43.183562,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        accessibilityId: 3,
        lat: -22.903969,
        lng: -43.177850,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Markers', null, {}),
};
