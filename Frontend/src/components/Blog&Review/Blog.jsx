import React from 'react'
import FilteredReviews from './FilteredReviews'
import ReviewComponent from './ReviewComponent'
import ReviewStats from './ReviewStats'


export default function Blog() {
  return (
    <div className="bg-BGColorYellow p-6">
      

      <div className="flex flex-col md:flex-row">
        <div className="md:flex-[1.5] w-full ">
          <ReviewStats />
        </div>
        <div className="md:flex-[1] w-full"> 
          <ReviewComponent />
        </div>
      </div>

      
      <div className="mt-4">
        <FilteredReviews />
      </div>
    </div>
  );
}
