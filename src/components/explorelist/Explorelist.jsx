import React from 'react'
import './Explorelist.css'
import { type_list } from '../../assets/assets'
const Explorelist = () => {
  return (
    <div className='explore-list' id='explore-list'>
        <h1>Explore the Diverse List</h1>
        <p className="explore-list-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, in hic exercitationem neque nisi ex ipsam aperiam voluptates quia qui fugiat, dolore minima ab debitis deserunt dolor dolorum quod odio?</p>
        <div className="explore-list-list">
            {type_list.map((item,index)=>{
                return (
                    <div className="explore-list-list-item">
                        <img src={item.type_image} alt="" />
                        <p className='explore-list-list-item-text'>{item.type_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Explorelist
