// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../Component/Header';
// import Footer from '../Component/Footer';

// function MainLayout() {
//   return (
//     <div className="font-sans text-foreground bg-background transition-colors duration-300 min-h-screen flex flex-col">
//       <Header />
      
//       <main className="flex-1">
//         <Outlet /> 
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default MainLayout;

import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import React from 'react'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Header/>

      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      
    </div>
  )
}

export default MainLayout
