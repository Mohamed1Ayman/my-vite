import React from 'react'
import style from './Header.module.css'

const Navbar = ({ links }) => {
  
  return (
    <div>
        
        <ul className={style.link}>
            {links.map((link) => (
                <a key={link.path} href={link.path}>
                    <li>{link.name}</li>
                </a>
            ))}
           
        </ul>
    </div>
  )
}

export default Navbar