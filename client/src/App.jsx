import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import PokemonDetail from './components/PokemonDetail';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <>

      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </main>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
            <NavLink className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/">

              {({ isActive, isPending, isTransitioning }) => (
                <>
                  <svg className={`${isActive ? 'text-blue-600' : 'text-gray-500'} w-5 h-5 mb-2 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    {/* <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> */}
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>

                  <span className={`${isActive ? 'text-blue-600' : 'text-gray-500'} text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}>Home</span>
                </>

              )}
            </NavLink>
            <NavLink type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/inventory">
              {({ isActive, isPending, isTransitioning }) => (
                <>




                  {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                    <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
                  </svg> */}

                  <svg className={`${isActive ? 'text-blue-600' : 'text-gray-500'} w-6 h-6 mb-2 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 22">
                    <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                    <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
                  </svg>


                  <span className={`${isActive ? 'text-blue-600' : 'text-gray-500'} text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}>Pokemon List</span>
                </>
              )}
            </NavLink>

          </div>
        </div>
        <ToastContainer />

      </BrowserRouter>
    </>
  )
}

export default App
