import { Suspense } from 'react'
import MainRoutes from './constants/routes'
import {
  Route,
  Routes
} from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <Suspense>
      <Routes>
        {MainRoutes.map(({ Component, path }) => {
          return <Route element={<Component />} path={path} key={path} />
        })}
      </Routes>
    </Suspense>
  )
}

export default App
