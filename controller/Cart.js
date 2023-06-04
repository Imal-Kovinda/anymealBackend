const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.addToCart = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))

    const meals = [req.body.meal_name, req.body.amount, req.body.item_totalPrice]

    conn.query("INSERT INTO `cart`(`cart_id`, `meal_name`, `amount`, `item_totalPrice`, `status`) VALUES (NULL, ?, 1)", [meals], (err, data, fields) => {
        if (err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}