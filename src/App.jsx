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
          <div data-modal-target="earnings-modal" data-modal-toggle="earnings-modal" className='earning border-double border-2 border-slate-600 p-5'>
            <h3 className='text-center font-bold uppercase underline'>Earnings</h3>
          </div>
        </section>
      </main>
      <footer className='bg-slate-800 border border-slate-800 p-6 fixed bottom-0 w-full'>
        <p className='text-white font-bold text-center uppercase'>Budgetry 2023</p>
      </footer>
    </>
  )
}

export default App