const express = require('express');
const ExpressError = require('./expressError');
const {mean, median, mode} = require('./helpers');
const app = express();


app.use(express.json());

app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('Must provide a comma-separated list of numbers as a query', 400)
        }
        console.log(req.query.nums);

        let nums = req.query.nums.split(',').map(num => parseInt(num));
        let response = {
            operation: 'mean',
            value: mean(nums)
        }
        return res.send(response);
    } catch (e) {
        next(e);
    }
})

app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) throw new ExpressError('Must provide a comma-separated list of numbers as a query', 400)

        let nums = req.query.nums.split(',').map(num => parseInt(num));
        let response = {
            operation: 'median',
            value: median(nums)
        }
        return res.send(response);
    } catch (e) {
        next(e);
    }
})

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) throw new ExpressError('Must provide a comma-separated list of numbers as a query', 400)

        let nums = req.query.nums.split(',').map(num => parseInt(num));
        let response = {
            operation: 'mode',
            value: mode(nums)
        }
        return res.send(response);
    } catch (e) {
        next(e);
    }
})

app.use((req, res, next) => {
    const e = new ExpressError('Page Not Found', 404);
    next(e);
})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({
        error: {message, status}
    });
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})