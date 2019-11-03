import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store'
import App from './components/App'
import { Provider } from 'react-redux'
import appSaga from './saga'

const initialState = window.__REDUX_STATE__ || {}

const store = configureStore(initialState)
store.runSaga(appSaga)

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('content')
)