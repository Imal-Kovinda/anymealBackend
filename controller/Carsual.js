const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.getToCard = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))
    const mealId = req.body.meal_id;
    console.log("mealId "+mealId);
  

    //const meals = [req.body.meal_name, req.body.discription, req.body.price]
    conn.query(`SELECT meal_name, discription, price FROM meals WHERE status='1' AND meal_id= ${mealId}`, (err, data, fields) => {
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

exports.viewCardDetails = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))
    const mealId = req.body.meal_id;
    console.log("mealId "+mealId);
  

    //const meals = [req.body.meal_name, req.body.discription, req.body.price]
    conn.query(`SELECT meal_name, discription, price FROM meals WHERE status='1' AND meal_id= ${mealId}`, (err, data, fields) => {
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