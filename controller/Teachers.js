const conn = require('../services/database');
const AppError = require('../utils/appError');

//Select
exports.getAllTeachers = (req, res, next) => {
    conn.query("SELECT * FROM user", (err, data, fields) => {
        if(err)
        {
            res.status("401").json({
                data: err
            })
        }
        else
        {
            res.status(200).json({
                users: data[0].user_name
            })
        } 
    })
}
//Insert
exports.registerAllTeacher = (req, res, next) => {

    if(!req.body) return next(new AppError("no from data form!", 401))

    const value =[req.body.user_name, req.body.user_role, req.body.password]
    conn.query("INSERT INTO `user`(`user_id`, `user_name`, `user_role`, `password`) VALUES (NULL, ?)", [value], (err, data, fields) => {
        // if(err)
        // {
        //     res.status("401").json({
        //         data: err
        //     })
        // }
        // else{
        //     res.status("201").json({
        //         data: "Success"
        //     })
        // }
        if(err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}