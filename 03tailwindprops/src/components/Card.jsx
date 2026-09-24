import React from "react"
// import test from "../assets/test.png"
const Card = ({ userName = "No Name" }) => {
  return (
    <div className="max-w-sm rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">React Card</h2>
      <img
        src="https://images.unsplash.com/photo-1790137650907-92a58d05bfae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        alt=""
      />
      <h3>{userName}</h3>
      <p className="mb-4 text-gray-600">
        This is a simple card component using Tailwind CSS.
      </p>

      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Learn More
      </button>
    </div>
  )
}

export default Card
