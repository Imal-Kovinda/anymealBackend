const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.meals = (req, res, next) => {
    if(!req.body) return next(new AppError("No from data form!", 401))

    const meals = [req.body.meal_name, req.body.discription, req.body.price]
    conn.query("INSERT INTO `meals`(`meal_id`, `meal_name`, `discription`, `price`) VALUES (NULL, ?)", [meals], (err, data, fields) => {
        if(err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}