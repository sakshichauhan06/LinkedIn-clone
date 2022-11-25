import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => { // this basically returns a jsx object
        return (
            <div className='sidebar__recentItem'>
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar />
                <h2>Sakshi Chauhan</h2>
                <h4>chauhansakshi4m@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
        
    )
}

export default Sidebar;