const Order = require("../models/orderModel");

class OrderService {
  async createOrder(orderData) {
    const order = new Order(orderData);
    return await order.save();
  }

  async getOrdersByUid(uid) {
    return await Order.find({ uid }).sort({ createdAt: -1 });
  }
}

module.exports = new OrderService();
