const { Op } = require('sequelize');
const { Marker } = require('../models');

const getAll = async (ctx) => {
  const {
    north,
    south,
    east,
    west,
  } = ctx.query;

  if (!north) {
    ctx.throw(400, "O parâmetro 'north' deve ser informado");
  }

  if (!south) {
    ctx.throw(400, "O parâmetro 'south' deve ser informado");
  }

  if (!east) {
    ctx.throw(400, "O parâmetro 'east' deve ser informado");
  }

  if (!west) {
    ctx.throw(400, "O parâmetro 'west' deve ser informado");
  }

  const markers = await Marker.findAll({
    attributes: ['id', 'lat', 'lng'],
    raw: true,
    where: {
      lat: {
        [Op.between]: [parseFloat(south), parseFloat(north)],
      },
      lng: {
        [Op.between]: [parseFloat(west), parseFloat(east)],
      },
    },
  });

  ctx.body = markers;
};

module.exports = {
  getAll,
};