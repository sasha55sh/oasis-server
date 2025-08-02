const OrderService = require("../services/OrderService");

class OrderController {
  async createOrder(req, res) {
    const uid = req.user?.uid;
    const orderData = {
      ...req.body,
      uid,
    };
    const order = await OrderService.createOrder(orderData);
    return res.status(201).json(order);
  }

  async getOrders(req, res) {
    const uid = req.user.uid;
    const orders = await OrderService.getOrdersByUid(uid);
    return res.status(200).json(orders);
  }
}

module.exports = new OrderController();
