// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

/*Establish associations*/

//Product belongs to Category - category can have multiple products but a product can only belong to one category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

//Category has many products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
})

//Product belongs to many Tags - products can have multiple tags and tags have many products
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
})

//Tag belongs to many products
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
})

module.exports = {
    Product,
    Category, 
    Tag,
    ProductTag,
};

