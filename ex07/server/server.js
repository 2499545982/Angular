"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var USERS = [
    {
        id: '01', userName: 'asdasf', password: 'asdewfgqwft'
    },
    {
        id: '02', userName: 'as12342rdsg', password: '12423543'
    }
];

app.all('*', function (req, res, next) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send(200); 
    else next();
});


app.get('/hello', function (req, resp)
{
    resp.send('asfddsf');
    resp.end();
});

app.get('/users', function (req, resp)
{
    resp.send(USERS);
    resp.end();
});

app.get('/users/:id', function (req, resp)
{
    console.log(req.params);
    const id = req.params.id;
    for (let user of USERS)
    {
        if (user.id === id)
        {
            resp.send([user]);
            break;
        }
    }
    resp.end();
});

app.post('/user/:id/:userName/:password', function (req, resp)
{
    console.log(req.params);
    resp.end();

});

app.post('/user', function (req, resp)
{
    USERS.push(req.body);
    resp.send({ succ: true });
    resp.end();
});

//修改
app.put('/user', function (req, resp)
{
    let found = false;
    for (const user of USERS)
    {
        if (user.id === req.body.id)
        {
            user.userName = req.body.userName;
            user.password = req.body.password;
            found = true;
            break;
        }
    }
    USERS.push(req.body);
    if (found)
        resp.send({ succ: true });
    else resp.send({ succ: false, msg: 'not found!' });
    resp.end();
});
//delete
app.delete('/user/:id', function (req, resp)
{
    let found = false;
    let index = 0;
    for (const user of USERS)
    {
        if (user.id === req.params.id)
        {
            USERS.splice(index, 1);
            found = true;
            //break;
        }
        index++;
    }
    if (found)
        resp.send({ succ: true, msg: 'delete success !' });
    else resp.send({ succ: false, msg: 'not found!' });
    resp.end();
});



app.listen(8080, function ()
{
    console.log('8080\ndone!');
});