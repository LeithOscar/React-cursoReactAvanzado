import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './Pages/Home'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo/'
export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')

    return (
        <div>
            <GlobalStyle />
            <Logo />
            {
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    : <Router>
                        <Home path='/' />
                        <Home path='/pet/:id' />
                    </Router>
            }
        </div>
    )
}