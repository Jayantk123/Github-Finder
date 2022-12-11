import React from 'react'
import FollowingsItems from './FollowingsItems';
import PropTypes from 'prop-types'
export default function FollowingsList({followingsdata}) {
 
    return (
        <>
        <div className="rounded-lg shadow-lg card bg-base-100 mb-10 mt-10">
            <div className="card-body">
              <h2 className="text-3xl my-4 font-bold card-title">
                Followings
              </h2>
              <div className='grid grid-cols-2 gap-1 justify-evenly'>
              {followingsdata.map((followings) => (
           
             <FollowingsItems followings={followings} key={followings.id}/>
           
          
            ))
          }
            </div>
            </div>
          </div>
      
      
      </>
      )}
      FollowingsList.propTypes = {
          FollowingsList: PropTypes.array.isRequired,
        };