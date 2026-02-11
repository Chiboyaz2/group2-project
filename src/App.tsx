
import { Suspense } from 'react'
import './App.css'
import Loading from './components/Loading'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
  <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
