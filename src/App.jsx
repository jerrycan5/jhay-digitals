// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MainLayout from './layout/MainLayout'
// import React from 'react'
// import HeroSection from './Component/HeroSection'
// import Features from './Component/Features'
// import Statistics from './Component/Statistics'


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={
//             <>
//               <HeroSection />
//               <Features />
//               <Statistics/>
//               <Broad/>
//             </>
//           } />
//         </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App




import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './page/Home'
import Signup from './page/Signup'
import SignIn from './page/signin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },

      {
        path:'/signup',
        element: <Signup/>,
      },
      {
        path:'/signin',
        element: <SignIn/>,
      },
      // add more routes here
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
