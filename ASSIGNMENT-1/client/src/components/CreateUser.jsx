import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/create", formData)
            alert("User Created Successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-5">
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-2xl w-full max-w-sm p-6 space-y-5 transition-transform transform hover:scale-105"
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-blue-600 uppercase">Create User</h1>
                    <p className="text-gray-500 text-sm mt-1">Fill in your details below</p>
                </div>

                <div className="space-y-3">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium text-sm mb-1 ">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your name"
                            className="border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium text-sm mb-1">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            className="border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium text-sm mb-1">Age</label>
                        <input
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            type="number"
                            placeholder="Enter your age"
                            className="border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition shadow-md text-sm"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateUser
