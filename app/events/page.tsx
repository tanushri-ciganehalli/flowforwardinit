import React from 'react';

const MyCalendarPage = () => {
  return (
    <div className='min-h-screen bg-blush py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-relaxed'>
            Events Calendar
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl text-white leading-relaxed'>
            Keep updated on our upcoming events!
          </p>
        </div>
        
        {/* Calendar Container */}
        <div className='w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=9c65456f0e7b19d3e106d6d2fcde30b9e5153688260516e58e9390a216dda6a8%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            className='w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px]'
            style={{border: 0}} 
            frameBorder="0" 
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendarPage;