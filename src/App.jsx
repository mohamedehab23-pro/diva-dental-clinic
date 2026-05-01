import HeroPage from '../src/Pages/HeroPage'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ContactPage from './Pages/ContactPage'
import NotFound from './Pages/NotFound'
import Services from './Pages/Services'
import Booking from './Pages/Booking'
import Reviews from './Pages/BeforeAfterPage'
import { MainLayout } from './Layouts/MainLayout'


const x=createBrowserRouter([
  {path:'',element:<MainLayout/>,children:[
    {index:true,element:<HeroPage/>},
    {path:'/#contact',element:<ContactPage/>},
    {path:'/#services',element:<Services/>},
    {path:'/#reviews',element:<Reviews/>},
    {path:'/#booking',element:<Booking/>},
    {path:'*',element:<NotFound/>}
  ]}
])

function App() {

  return (
    <>

     <RouterProvider router={x}/>
    </>
  )
}

export default App
