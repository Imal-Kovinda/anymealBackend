const express = require('express');
const router_student = require('./routes/route_student');
const router_teacher = require('./routes/route_teacher');
const AppError = require('./utils/appError');
const errorHandler = require('./utils/errorHandler');

//link for hansana page
//medium.com/@hansana876/build-a-rest-api-with-node-js-express-and-mysql-3789a47b7b03

const app = express();

app.use(express.json());

//middleware
// app.use((req, res, next) => {
//     console.log(`url ${req.originalUrl} method`);
//     next();
// })

app.use("/student", router_student);
app.use("/teacher", router_teacher);

app.use(errorHandler);

app.all("*", (req, res, next) => {
    next(new AppError)
    //next(new AppError(`url ${req.originalUrl} not found`, 404))
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})