import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiaMundial from './components/DiaMundial/DiaMundial'
import DiscountsPanel from './components/DiscountsPanel/DiscountsPanel'
import Footer from './components/Footer/Footer'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <DiaMundial />
            <div className="container">
                <DiscountsPanel />
            </div>
            <Footer />
        </QueryClientProvider>
    )
}

export default App
