import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-red-900 to-black text-white py-4">
      <div className="container mx-auto text-center">
        <span className="text-sm">&copy; {new Date().getFullYear()} Zen. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
