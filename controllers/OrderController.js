const OrderService = require("../services/OrderService");

class OrderController {
  async createOrder(req, res) {
    const order = await OrderService.createOrder(req.body);
    return res.status(201).json(order);
  }

  async getById(req, res) {
    const { id } = req.params;
    const order = await OrderService.getOrderById(id);
    return res.status(200).json(order);
  }
}

module.exports = new OrderController();
