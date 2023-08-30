import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiaMundial from './components/DiaMundial/DiaMundial'
import DiscountsPanel from './components/DiscountsPanel/DiscountsPanel'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <DiaMundial />
            <div className="container">
                <DiscountsPanel />
            </div>
            <Footer />
        </>
    )
}

export default App
