const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.orders = (req, res, next) => {
    if(!req.body) return next(new AppError("No from data form!", 401))

    const purches = [req.body.user_id, req.body.meal_id, req.body.amount, req.body.total_price]
    conn.query("INSERT INTO `orders`(`user_id`,`meal_id`,`amount`, `total_price`) VALUES (?)", [purches], (err, data, fields) => {
        if(err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}