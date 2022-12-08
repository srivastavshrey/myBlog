import { Route, Routes } from 'react-router-dom'
import authRoutes from './routes'

const index = (): JSX.Element => {
  return (
    <Routes>
      { authRoutes.map(({ Component, path, id }) => {
        return <Route path={ path } key={ id } element={ <Component/> } />
      }) }
    </Routes>
  )
}

export default index
