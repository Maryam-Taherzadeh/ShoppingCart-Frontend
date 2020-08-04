var express = require('express');
var router = express.Router();
var Product = require('../models/product');
const { route, render } = require('../app');
var Cart = require('../models/cart');
var Order = require('../models/order');

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var produtcsChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      produtcsChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Digital Photo Company !!', products: produtcsChunks });
  });

});

router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function (err, product) {
    if (err) {
      console.log(err)
      return res.redirect('/');
    }

    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});

router.get('/shopping-cart', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', { products: null }); ``
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
});

router.get('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/checkout', { total: cart.totalPrice });
});

router.post('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }

  var cart = new Cart(req.session.cart);

  var order = new Order({
    cart: cart,
    phone: req.body.phone,
    name: req.body.name + req.body.lastname,
    paymentId: "randomstring",
    date: Date.now()
  });

  order.save(function (err, result) {
    console.log("res: " + result);
    if (err) {
      console.log(err);
    }
    req.session.cart = null;
    res.redirect('/shop-done');
  });
});

router.get('/shop-done', function (req, res, next) {
  return res.render('shop/shop-done');
});

router.get('/order-history', function (req, res, next) {
  Order.find(function (err, orders) {
    res.render('order/index', { orders: orders });
  });

});

router.get('/remove-shop-item/:id', function (req, res, next) {
  var ProductId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(ProductId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

module.exports = router;
