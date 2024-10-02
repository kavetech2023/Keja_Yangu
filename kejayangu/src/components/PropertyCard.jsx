import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">{property.location}</p>
        <p className="mt-2 text-lg font-semibold text-gray-900">${property.price} <span className="text-sm font-normal">/ night</span></p>
      </div>
    </motion.div>
  )
}

export default PropertyCard