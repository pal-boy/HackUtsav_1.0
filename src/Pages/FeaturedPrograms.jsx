import React from "react";

const FeaturedPrograms = () => {
  return (
    <section id="programs" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">Our Programs</h2>
      <div className="mt-8 flex flex-wrap justify-center">
        {/* Program 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="https://img.freepik.com/free-vector/flat-world-food-safety-day-illustration_23-2149405592.jpg" alt="save food" />
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">Food Rescue Program</h3>
            <p className="text-gray-700 text-base">
              Our Food Rescue Program aims to reduce food waste by rescuing surplus food from local restaurants, cafes, and grocery stores.
            </p>
          </div>
        </div>
        {/* Program 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="https://img.freepik.com/free-photo/close-up-volunteers-working-together_23-2149182025.jpg" alt="food bank" />
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">Food Bank Program</h3>
            <p className="text-gray-700 text-base">
              Food Bank Program collects and stores non-perishable food items and distributes them to partner agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
