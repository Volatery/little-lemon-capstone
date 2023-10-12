import React from 'react'

const Reservations = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='w-full h-[500px] md:h-[400px] flex flex-col items-center bg-[#495d57] pt-4 px-4'>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <div>
          <h1 className='text-4xl text-yellow-400 font-semibold mb-8'>Reservations</h1>
        </div>
        <div className='grid md:grid-cols-4 items-center text-white mb-8'>
          <label htmlFor='indoor' className='col-span-2'>
            Indoor Seating
            <input type='radio' id='indoor' name='seating' value='indoor' className='ml-2' required></input>
          </label>

          <label htmlFor='outdoor' className='col-span-2'>
            Outdoor Seating
            <input type='radio' id='outdoor' name='seating' value='outdoor' className='ml-2' required></input>
          </label>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <div className='grid'>
            <label className='text-white' htmlFor='date'>Date</label>
            <input type='date' id='date' name='date' required min={new Date().toISOString().split('T')[0]} />
          </div>
          <div className='grid'>
            <label className='text-white'>Number of Diners</label>
            <input type='number' id='numberOfDiners' name='numberOfDiners' min='1' max='10' required></input>
        </div>
          <div className='grid'>
            <label className='text-white' htmlFor='occasion'>Occasion</label>
            <select id='occasion' name='occasion' required defaultValue=''>
              <option value='' disabled>Select an option</option>
              <option value='birthday'>Birthday</option>
              <option value='anniversary'>Anniversary</option>
              <option value='engagement'>Engagement</option>
            </select>
          </div>
          <div className='grid'>
            <label className='text-white'>Time</label>
            <input type='time' id='time' name='time' min="09:00" max="18:00" required></input>
          </div>
          <div>
            <button className=' bg-yellow-400 text-black px-6 py-3 font-bold rounded-2xl mt-4'>Reserve!</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Reservations