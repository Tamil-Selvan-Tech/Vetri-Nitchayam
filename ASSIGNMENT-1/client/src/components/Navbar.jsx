import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    const navLinkClass = (path) =>
        `px-4 py-2 rounded-lg font-medium transition duration-300 ${
            location.pathname === path
                ? 'bg-white text-blue-600'
                : 'hover:bg-white hover:text-blue-600 text-white'
        }`

    return (
        <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                
                {/* Logo / Brand */}
                <div className="text-2xl font-extrabold tracking-wide text-white">
                    CRUD Operation
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-4 md:gap-6 text-lg">
                    <li>
                        <Link to="/" className={navLinkClass('/')}>
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link to="/update" className={navLinkClass('/update')}>
                            Update
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
