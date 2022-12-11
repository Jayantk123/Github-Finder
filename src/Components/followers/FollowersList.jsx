import React from 'react'
import PropTypes from 'prop-types'
import FollowersItems from './FollowersItems';
export default function FollowersList({followersdata}) {

 
  return (
  <>
  <div className="rounded-lg shadow-lg card bg-base-100 mb-10 mt-10">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Followers
        </h2>
        <div className='grid grid-cols-2 gap-1 justify-evenly'>
        {followersdata.map((followers) => (
     
       <FollowersItems followers={followers} key={followers.id}/>
     
    
      ))
    }
      </div>
      </div>
    </div>


</>
)}
FollowersList.propTypes = {
    followersdata: PropTypes.array.isRequired,
  };