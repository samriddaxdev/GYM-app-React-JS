import React from 'react';

export default function Hero() {
  return (
    <div
      className='min-h-screen flex flex-col gap-10
      items-center justify-center'
    >
      <p>IT'S TIME TO GET</p>
      <h1
        className='uppercase font-semibold
      text-4xl sm:text-5xl md:text-6xl
      lg:text-7xl'
      >
        Lift<span className='text-blue-400'>Logix</span>
      </h1>
      <p className='text-sm md:text-base font-light'>
        I hereby acknowledge that I may become{' '}
        <span className='text-blue-400 font-medium'>unbelievably fit </span> and
        accept all risks of becoming the local<span> mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
    </div>
  );
}
