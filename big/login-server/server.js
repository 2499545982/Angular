"use strict";
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const admin = [
    { id: '01', userName: 'admin', password: '123456' },
    { id: '02', userName: 'aaa', password: '456789' }
];

app.all('*', function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS');
    res.header("x-Powered-By", '3.2.1')
    if (req.method == "OPTIONS") res.send(200);
    else next();
})

app.get('/hello', function (req, resp)
{
    resp.send('哈哈哈');
    resp.end();
});

app.get('/users', function (req, resp)
{
    resp.send(admin);
    resp.end();
});

app.get('/users/:id', function (req, resp)
{
    console.log(req.params);
    const id = req.params.id;
    for (let user of admin)
    {
        if (user.id === id)
        {
            resp.send([user]);
            break;
        }
    }
    resp.end();
});

//添加用户
app.post('/user', function (req, resp)
{
    admin.push(req.body);
    resp.send({ succ: true });
    resp.end();
});

app.post('/check', function (req, resp)
{
    let founded = false;
    for (let user of admin)
    {
        if (user.userName === req.body.userName && user.password === req.body.password)
        {
            founded = true;
            resp.send({ succ: 'true' });
            resp.end();
            return;
        }
    }
    resp.send({ succ: '账号密码错误' });
    resp.end();
});



//修改用户
app.put('/user', function (req, resp)
{
    let founded = false;
    for (let user of admin)
    {
        if (user.id === req.body.id)
        {
            user.userName = req.body.userName;
            user.password = req.body.password;
            founded = true;
            break;
        }
    }

    if (founded)
    {
        resp.send({ succ: true });
    }
    else
    {
        resp.send({ succ: false, msg: '没有找到用户!' });
    }
    resp.end();
});

//删除用户
app.delete('/user/:id', function (req, resp)
{
    let founded = false;
    let index = 0;
    for (let user of admin)
    {
        if (user.id === req.params.id)
        {
            admin.splice(index, 1)
            founded = true;
            break;
        }
        index++;
    }

    if (founded)
    {
        resp.send({ succ: true });
    }
    else
    {
        resp.send({ succ: false, msg: '没有找到用户!' });
    }
    resp.end();
});

app.listen(8000, function ()
{
    console.log('服务器在8000端口启动!');
});