import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Grab our Deal</h2>
                <p className='header-text'>Good shoes are more than just a fashion statement; they are essential for comfort, support, and overall well-being. Whether you're walking through a bustling city, hiking a rugged trail, or simply going about your daily routine, the right pair of shoes can make a significant difference in how you feel and perform.</p>

                <button>Go to Collection</button>
            </div>
        </div>
    )
}

export default Header
