var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        imagePath: 'https://i3.cpcache.com/merchandise/152_300x300_Front_Color-Black.jpg?Size=Large&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:10,%22height%22:10,%22alignment%22:%22TopCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:1000,%22crop_w%22:1000,%22scale%22:0,%22template%22:{%22id%22:111843075,%22params%22:{}}}%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]',
        title: 'Tshirt',
        description: "This is made in seeder!!!",
        price: 10
    }),
    new Product({
        imagePath: 'https://i3.cpcache.com/merchandise/152_300x300_Front_Color-Black.jpg?Size=Large&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:10,%22height%22:10,%22alignment%22:%22TopCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:1000,%22crop_w%22:1000,%22scale%22:0,%22template%22:{%22id%22:111843075,%22params%22:{}}}%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]',
        title: 'Tshir2t',
        description: "This is made in seeder!!!",
        price: 20
    }),
    new Product({
        imagePath: 'https://i3.cpcache.com/merchandise/152_300x300_Front_Color-Black.jpg?Size=Large&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:10,%22height%22:10,%22alignment%22:%22TopCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:1000,%22crop_w%22:1000,%22scale%22:0,%22template%22:{%22id%22:111843075,%22params%22:{}}}%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]',
        title: 'Tshirt3',
        description: "This is made in seeder!!!",
        price: 60
    }),
    new Product({
        imagePath: 'https://i3.cpcache.com/merchandise/152_300x300_Front_Color-Black.jpg?Size=Large&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:10,%22height%22:10,%22alignment%22:%22TopCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:1000,%22crop_w%22:1000,%22scale%22:0,%22template%22:{%22id%22:111843075,%22params%22:{}}}%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]',
        title: 'Tshirt5',
        description: "This is made in seeder!!!",
        price: 40
    })
];


var done = 0;
for (var i = 0; i <= products.length; i++) {
    try {
    
        products[i].save(function (err, result) {
            done++;
            if (done === products.length) {
                exit();
            }
        });
    } catch (e) {
        console.log(e);
    }

}


function exit() {
    mongoose.disconnect();
}