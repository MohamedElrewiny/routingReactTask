import React from 'react'
import Home from './component/Home/Home'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import About from './component/About/About'

export default function App() {

  let routes=createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
