const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.login = (req, res, next) => {
    if (!req.body) return next(new AppError("No from data form!", 401))
    const userName = req.body.user_name;
    const pwd = req.body.password;
    conn.query(`SELECT * FROM user WHERE user_name="${userName}" AND password="${pwd}"`, (err,data, fields) => {
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