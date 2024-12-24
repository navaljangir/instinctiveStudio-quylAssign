
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { StudentsPage } from './components/Dashboard/Student'
import { DashboardLayout } from './components/Dashboard/Layout'
import { Chapter } from './components/Dashboard/Chapter'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>landing page</div>}></Route>
        <Route path='/dashboard/*' element={<DashboardLayout/>}>
        <Route path='students' element={<StudentsPage />}></Route>
            <Route path='chapter' element={<Chapter/>}></Route>
            <Route path='help' element={<StudentsPage/>}></Route>
            <Route path='settings' element={<StudentsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
