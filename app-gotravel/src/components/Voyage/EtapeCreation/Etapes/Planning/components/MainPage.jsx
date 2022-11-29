import React from 'react'
import DaysBar from './DaysBar'
import DaysPage from './DaysPage'

function MainPage() {
  return (
    <div className="flex ">
        {/* DaysBar*/}
        <div class="flex-1 h-96 w-10">
            <DaysBar />
        </div>

        {/* section*/}
        <div class="flex-1">
            <DaysPage />
        </div>
    </div>
  )
}

export default MainPage