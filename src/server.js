const express = require('express');

const { CLIENT_ONLY } = process.env
const app = express();
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use('/static', express.static('public'))
import configureStore from './store'
import appSaga from './saga'


app.get('*', async (req, res) => {
    const context = {}
    const store = configureStore({})
    await store.runSaga(appSaga).done
    
    const state = store.getState()
    res.render('layout', {
        state: JSON.stringify(state),
        content :ReactDOMServer.renderToString (
            CLIENT_ONLY ? '' :
            ( <Provider store = {store}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </Provider> )
        )   
    })
});

const port = process.env.PORT || 4000
app.listen(port, function(){
    console.log(`Your node js server is running on ${port} `);
});