import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import CalendarView from '../components/CalendarView/CalendarView';

const TimerPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4">
        <MainWrapper>
          <CalendarView />
        </MainWrapper>
      </div>
    </>
  );
};

export default TimerPage;
