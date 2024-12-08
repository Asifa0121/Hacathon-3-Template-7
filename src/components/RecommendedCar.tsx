import React from "react";
import CarCard from "./carcards";

// Responsive RecommendedCar Component
export const RecommendedCar: React.FC = () => {
  const cars = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      image: "/images/rush.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100,
      favoriteIcon: "/images/heart.png",
    },
    {
      name: "Ford Mustang",
      type: "Gasoline",
      image: "/images/cr.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/images/red-heart.png",
    },
    {
      name: "BMW X5",
      type: "Diesel",
      image: "/images/terios.png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 150,
      favoriteIcon: "/images/heart.png",
    },
    {
      name: "Audi A6",
      type: "Hybrid",
      image: "/images/cr4.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 120,
      favoriteIcon: "/images/red-heart.png",
    },
    {
      name: "Mercedes-Benz C-Class",
      type: "Gasoline",
      image: "/images/exclusive.png",
      fuelCapacity: "65 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 140,
      favoriteIcon: "/images/heart.png",
    },
    {
      name: "Porsche 911",
      type: "Gasoline",
      image: "/images/mg.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 200,
      favoriteIcon: "/images/red-heart.png",
    },
    {
      name: "Chevrolet Camaro",
      type: "Gasoline",
      image: "/images/excite.png",
      fuelCapacity: "70 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 110,
      favoriteIcon: "/images/heart.png",
    },
    {
      name: "Nissan Altima",
      type: "Hybrid",
      image: "/images/mg4.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 90,
      favoriteIcon: "/images/red-heart.png",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 md:p-8">
      {/* Section Header */}
      <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
        Recommended Car
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <button
          className="px-6 py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]"
        >
          Show more cars
        </button>
      </div>
    </div>
  );
};

export default RecommendedCar;
