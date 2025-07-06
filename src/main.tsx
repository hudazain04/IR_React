import { createContext, StrictMode, useContext, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { SearchResult } from './pages/index.tsx'

const client = new QueryClient()


const DataContext  = createContext<{
  data :  SearchResult[]
  setData : any
}>({
  data : [], 
  setData : null
})


export const DataContextProvider  = ({children} : {children : ReactNode}) => {
  const [data , setData]  =  useState<SearchResult[]>([])
  return <DataContext.Provider value={{
    data :  data,
    setData  : setData
  }}>
{children}
  </DataContext.Provider>
}

export const useDataContext = () =>  useContext(DataContext)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
<DataContextProvider>

    <App />
</DataContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
