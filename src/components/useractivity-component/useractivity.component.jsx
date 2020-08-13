import React from 'react'
import './useractivity.styles.css'

const UserActivity = ({activity_periods}) => {
    console.log(activity_periods)
    console.log('params')
    return ( 
        <div className="UserActivity">
        <div className="heading">
          <div className="time">
              START TIME             
          </div>
          <div className="time">
              END TIME 
          </div>
        </div>
        <hr></hr>
         
         <div className="two">
             {
                 activity_periods  && activity_periods.map(activity=> (
                    <div className="element">
                    <span className="element-start"> 
                        {activity.start_time}
                    </span>       
                     <span className="element-end"> 
                        {activity.end_time}
                     </span>       
        
                  </div>


                 ))
             }
         
        <div className="Calendar">
             
        </div>
        </div>
        
 </div>   

    )
}



export default UserActivity

