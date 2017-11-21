var Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/SPA', {
    logging: false
})

const Place = db.define('place', {

    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
})
const Hotel = db.define('hotel', {

    name: {
        type: Sequelize.STRING
    },
    num_stars: {
        type: Sequelize.FLOAT(1, 5)
    },
    amenities: {
        type: Sequelize.TEXT
    }
})

const Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.DATE
    }

})

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
})