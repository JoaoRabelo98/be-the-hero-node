const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const ongs = await connection('ongs').select('*');

      return response.json(ongs);
    } catch (err) {
      return res.status(400).json({message: 'Ops! Houve um erro :s'})
    }
  },
  async create(request, response) {
    try {
      const { name, email, whatsapp, city, uf } = request.body;

      const id = crypto.randomBytes(4).toString('HEX');

      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return response.json({ id });
    } catch (err) {
      return res.status(400).json({ message: 'Ops! Houve um erro ;s' });
    }
  },
}