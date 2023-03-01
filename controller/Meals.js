const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.meals = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))

    const meals = [req.body.meal_name, req.body.discription, req.body.price]
    conn.query("INSERT INTO `meals`(`meal_id`, `meal_name`, `discription`, `price`, `status`) VALUES (NULL, ?, 1)", [meals], (err, data, fields) => {
        if (err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}

exports.viewMeals = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))

    //const meals = [req.body.meal_name, req.body.discription, req.body.price]
    conn.query("SELECT meal_id, meal_name, price FROM `meals` WHERE status='1'", (err, data, fields) => {
        if (err) {
            res.status("401").json({
                data: err
            })
        }
        else {
            res.status(200).json({
                users: data
            })
        }
    })
}

exports.removeMeal = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))
    const mealId = req.body.meal_id;
    console.log(typeof mealId)
    //const meals = [req.body.meal_name, req.body.discription, req.body.price]
    conn.query(`UPDATE meals SET status=0 WHERE meal_id = ${mealId}`, (err, data, fields) => {
        if (err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Removed Successfully"
        })
    })
}