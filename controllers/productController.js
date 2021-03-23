const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
  // Get all products with DB
  async getAll(req, res) {
    let { limit, page } = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit

    const products = await Product
      .findAndCountAll({ limit, offset })

    return res.json(products)
  }

  // Get one product with DB
  async getOne(req, res) {
    const { id } = req.params
    const product = await Product.findOne({ where: { id } })

    return res.json(product)
  }

  // Create new product in DB
  async create(req, res, next) {
    try {
      let { name, price, description, imgUrl } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const product = await Product
        .create({ name, price, description, imgUrl, img: fileName })

      return res.json(product)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  // Update product with DB
  async update(req, res, next) {
    try {
      const { id } = req.params
      const { name, price, description, imgUrl } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      await Product
        .update({ name, price, description, imgUrl, img: fileName }, { where: { id } })

      return res.status(200).json({message: 'Product updated'})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  // Delete product with DB
  async delete(req, res, next) {
    try {
      const { id } = req.params

      await Product
        .destroy({ where: { id } })

      return res.status(200).json({
        message: 'Product deleted'
      })
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new ProductController()
