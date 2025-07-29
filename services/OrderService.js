const Order = require("../models/orderModel");

class OrderService {
  async createOrder(orderData) {
    const order = new Order(orderData);
    return await order.save();
  }

  async getOrderById(id) {
    return await Order.findById(id);
  }
}

module.exports = new OrderService();
