import React from "react"
import {withRouter} from 'react-router-dom'
import './MenuItem.scss'

const MenuItem = ({title, image, history, linkUrl, match}) => (
    <div className='menu-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage: `url(${image})`}}/>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem)