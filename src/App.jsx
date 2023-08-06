import React from 'react'

const App = () => {
(() => {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear;
  })();
  
  return (
    <>
      <header>
        <nav className='flex items-center justify-between py-2 fixed top-0 w-full bg-slate-800'>
          <h2 className='text-lg text-white font-semibold uppercase'>Bud<span className='text-red-800'>getti</span></h2>
          <ul>
            <li className='inline-block list-none px-3 py-3'>
              <a className='hover:text-red-400 text-white' href="#">Home</a>
            </li>
            <li className='inline-block list-none px-3 py-3'>
              <a className='hover:text-red-400 text-white' href="#">Chart</a>
            </li>
            <li className='inline-block list-none px-3 py-3'>
              <a  className='hover:text-red-400 text-white'href="#">Credits</a>
            </li>
          </ul>
          <button type='button' className='bg-red-500 text-white p-2 rounded font-bold'>Logout</button>
        </nav>
      </header>
      <main className='mt-12 translate-y-7'>
        <section className='organizer grid gap-4'>
          <div data-modal-target="savings-modal" data-modal-toggle="savings-modal" className='savings border-double border-2 border-slate-600 p-5'>
            <h3 className='text-center font-bold uppercase underline'>Savings</h3>
          </div>
          <div data-modal-target="invest-modal" data-modal-toggle="invest-modal" className='investments border-double border-2 border-slate-600 p-5'>
            <h3 className='text-center font-bold uppercase underline'>Investments</h3>
          </div>
          <div className='actions border-double border-2 border-slate-600 p-5'>
            <div className='bg-slate-700 p-4 text-white text-center rounded m-2'>
              <span>Expense</span>
            </div>
            <div className='bg-slate-700 p-4 text-white text-center rounded m-2'>
              <span>Investment</span>
            </div>
            <div className='bg-slate-700 p-4 text-white text-center rounded m-2'>
              <span>Savings</span>
            </div>
            <div className='bg-slate-700 p-4 text-white text-center rounded m-2'>
            <span>Earnings</span>
            </div>
          </div>
          <div data-modal-target="expenses-modal" data-modal-toggle="expenses-modal" className='expense border-double border-2 border-slate-600 p-5'>
            <h3 className='text-center font-bold uppercase underline'>Expenses</h3>
          </div>
          <button data-modal-target="earnings-modal" data-modal-toggle="earnings-modal" className='earning border-double border-2 border-slate-600 p-5'>
            <h3 className='text-center font-bold uppercase underline'>Earnings</h3>
          </button>
        </section>
      </main>

      {/* <!-- Main modal --> */}
      <div id="earnings-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="earnings-modal">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                      <form className="space-y-6" action="#">
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                          </div>
                          <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                              <input type="password" name="password" id="password" placeholder="Your Password...." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                          </div>
                          <div className="flex justify-between">
                              <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                  </div>
                                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                              </div>
                              <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                          </div>
                          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                              Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div> 

      <footer className='bg-slate-800 border border-slate-800 p-6 fixed bottom-0 w-full'>
        <p className='text-white font-bold text-center uppercase'>Budgetry 2023</p>
      </footer>
    </>
  )
}

export default App