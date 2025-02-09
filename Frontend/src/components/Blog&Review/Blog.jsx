import React from 'react'
import FilteredReviews from './FilteredReviews'
import ReviewComponent from './ReviewComponent'
import ReviewStats from './ReviewStats'
import AllReviewsComponent from './AllReviewsPage'

export default function Blog() {
  return (
    <>
    <div className='bg-BGColorYellow '>
    
    <div className='pt-10'><ReviewStats /></div>
    <ReviewComponent />
    <FilteredReviews />
    </div>
    </>
  )
}
