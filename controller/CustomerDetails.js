const conn = require('../services/database');
const AppError = require('../utils/appError');

exports.customerDetails = (req, res, next) => {
    if(!req.body) return next(new AppError("No from data form!", 401))

    const customer = [req.body.cust_name, req.body.email, req.body.password, req.body.address, req.body.mobile]
    conn.query("INSERT INTO `customer_details`(`cust_id`, `cust_name`, `email`, `password`, `address`, `mobile`) VALUES (NULL, ?)", [customer], (err, data, fields) => {
        if(err) return next(new AppError(err, 500));
        res.status("201").json({
            data: "Success"
        })
    })
}
