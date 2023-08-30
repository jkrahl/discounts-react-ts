import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiaMundial from './components/DiaMundial/DiaMundial'
import DiscountsPanel from './components/DiscountsPanel/DiscountsPanel'

function App() {
    return (
        <>
            <DiaMundial />
            <div className="container">
                <DiscountsPanel />
            </div>
        </>
    )
}

export default App
