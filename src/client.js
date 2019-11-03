import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store'
import App from './components/App'
import { Provider } from 'react-redux'
import appSaga from './saga'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const initialState = window.__REDUX_STATE__ || {}

const store = configureStore(initialState)
store.runSaga(appSaga)

function Main() {
    React.useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }, []);
  
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
  }

hydrate(<Main/>,
    document.getElementById('content')
)