import React, { useState, useEffect } from 'react'
import CardUser from 'react-tinder-card'
import '../components/cards.css'
import axios from 'axios';

function Cards() {

 


    const [user,setUser] = useState([
        {
            name: "Toby",
            age: 5,
            breed: "Bulldog",
            url:"https://images.unsplash.com/photo-1601245381370-4056f3f47526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            
        },
        {
            name: "Honey",
            age: 3,
            breed: "Siberian Husky",
            url:"https://images.unsplash.com/photo-1629246999700-1e7ad7a1ba03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=824&q=80"
        }

    ]);

    useEffect(() => {
        axios.get('http://wave.nodestarter.eu:4000/users/getall')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <>
    <div className='cardPet'>
        <div className='cardPet__container'>
    {user.map(user => (
        <CardUser
        className='swipe'
        key={user.name}
        preventSwipe={['up','down']}
        >
            <div 
            className='card'
            style={{backgroundImage:`url(${user.url})`}}
            >
                <h3>{user.name}</h3>
            </div>
        </CardUser>
    


        
    
        
        
    ))}
    </div>
    </div>
    </>

  )
}

export default Cards