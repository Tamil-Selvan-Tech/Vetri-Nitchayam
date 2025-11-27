import axios from "axios";
import React, { useEffect, useState } from "react";

const ReadUser = () => {
  const [readUser, setReadUser] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  // Fetch all users
  const allUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users/read");
      setReadUser(response.data.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    allUser();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/users/delete/${id}`);
        allUser(); // Refresh list
      } catch (error) {
        console.log("Error deleting user:", error);
      }
    }
  };

  // Start editing
  const startEdit = (user) => {
    setEditingUserId(user._id);
    setFormData({ name: user.name, email: user.email, age: user.age });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save / Update user
  const updateUser = async (id) => {
    try {
      await axios.put(`http://localhost:5000/users/update/${id}`, formData);
      setEditingUserId(null);
      allUser(); // Refresh list after update
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6">
      <h1 className="text-center text-4xl font-extrabold text-blue-700 mb-8">
        User List
      </h1>

      {readUser.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {readUser.map((user) => (
            <div
              key={user._id}
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              {editingUserId === user._id ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-blue-300 px-3 py-2 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-blue-300 px-3 py-2 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    placeholder="Email"
                  />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="border border-blue-300 px-3 py-2 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    placeholder="Age"
                  />

                  <div className="flex gap-3 justify-center mt-3">
                    <button
                      onClick={() => updateUser(user._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingUserId(null)}
                      className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-1">
                    <span className="font-semibold text-blue-600">Name:</span>{" "}
                    {user.name}
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold text-blue-600">Email:</span>{" "}
                    {user.email}
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-blue-600">Age:</span>{" "}
                    {user.age}
                  </p>

                  <div className="flex gap-3 justify-center mt-2">
                    <button
                      onClick={() => startEdit(user)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadUser;
