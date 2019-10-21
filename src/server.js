const express = require('express');
const app = express();
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './components/App'
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use('/static', express.static('public'))

app.get('*', function(req, res) {
    const context = {}
    res.render('layout', {
        content :ReactDOMServer.renderToString (
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        )   
    })
});

const port = process.env.PORT || 4000
app.listen(port, function(){
    console.log(`Your node js server is running on ${port} `);
});