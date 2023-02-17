const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.addMeals = (req, res, next) => {
    if(!req.body) return next(new AppError("No from data form!", 401))

    const meals = [req.body.meal_name, req.body.availability, req.body.price, req.body.amount]
    conn.query("INSERT INTO `available_meals`(`meal_id`, `meal_name`, `availability`, `price`, `amount`) VALUES (NULL, ?)", [meals], (err, data, fields) =>{
        if(err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}