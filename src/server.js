const express = require('express');

const { CLIENT_ONLY } = process.env
const app = express();
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles'
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
import theme from './theme'


app.get('*', async (req, res) => {
    const sheets = new ServerStyleSheets()

    const context = {}
    const store = configureStore({})
    await store.runSaga(appSaga).done
    
    const html = ReactDOMServer.renderToString (
        CLIENT_ONLY ? '' :
        ( 
            sheets.collect(
                <ThemeProvider theme={theme}>
                    <Provider store = {store}>
                        <StaticRouter location={req.url} context={context}>
                            <App/>
                        </StaticRouter>
                    </Provider>
                </ThemeProvider>
            )
        )
    ) 

    const css = sheets.toString()

    const state = store.getState()
    res.render('layout', {
        state: JSON.stringify(state),
        content : html,
        styles : css
    })
});

const port = process.env.PORT || 4000
app.listen(port, function(){
    console.log(`Your node js server is running on ${port} `);
});