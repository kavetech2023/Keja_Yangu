import React from 'react'
import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    title: "Cozy Beachfront Cottage",
    location: "Malibu, California",
    price: 250,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  },
  {
    id: 2,
    title: "Modern Downtown Loft",
    location: "New York City, New York",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    title: "Rustic Mountain Cabin",
    location: "Aspen, Colorado",
    price: 300,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 4,
    title: "Tropical Island Villa",
    location: "Bali, Indonesia",
    price: 400,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1505329603224-a0594327d7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
]

const PropertyList = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Popular properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyList