import React from 'react'

const App = () => {
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
          <div className='savings border-double border-2 border-slate-600 p-5'>
            1
          </div>
          <div className='investments border-double border-2 border-slate-600 p-5'>
            2
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
          <div className='expense border-double border-2 border-slate-600 p-5'>
            4
          </div>
          <div className='earning border-double border-2 border-slate-600 p-5'>
            5
          </div>
        </section>
      </main>
    </>
  )
}

export default App