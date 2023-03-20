import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/Home'

import AppLayout from './layouts/AppLayout'


const AppRouter = () => {
  const { auth } = useAuthCddontext()
  return (
    <Routes>
      <Route index element={<AppLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
