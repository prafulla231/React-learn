import React, { useState } from 'react';

function MiddleComponent() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedEwaste, setSelectedEwaste] = useState('');
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');

  const cityAreaMap = {
    city1: ['Area 1-1', 'Area 1-2', 'Area 1-3'],
    city2: ['Area 2-1', 'Area 2-2', 'Area 2-3'],
    city3: ['Area 3-1', 'Area 3-2', 'Area 3-3']
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedArea(''); // Reset area when city changes
  };

  const handleAreaChange = (e) => setSelectedArea(e.target.value);
  const handleEwasteChange = (e) => setSelectedEwaste(e.target.value);
  const handleImageChange = (e) => setImages([...e.target.files]);
  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex bg-gray-100 p-8 rounded shadow-md w-full max-w-4xl mx-auto">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-4">Submit a Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <select
              id="city"
              value={selectedCity}
              onChange={handleCityChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="">Select a city</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area</label>
            <select
              id="area"
              value={selectedArea}
              onChange={handleAreaChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              disabled={!selectedCity}
            >
              <option value="">Select an area</option>
              {selectedCity && cityAreaMap[selectedCity].map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type of Waste</label>
            <div className="mt-2 space-y-2">
              <div>
                <input
                  id="ewaste"
                  name="wasteType"
                  type="radio"
                  value="ewaste"
                  checked={selectedEwaste === 'ewaste'}
                  onChange={handleEwasteChange}
                  className="h-4 w-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                />
                <label htmlFor="ewaste" className="ml-3 block text-sm font-medium text-gray-700">
                  E-Waste
                </label>
              </div>
              <div>
                <input
                  id="deadbody"
                  name="wasteType"
                  type="radio"
                  value="deadbody"
                  checked={selectedEwaste === 'deadbody'}
                  onChange={handleEwasteChange}
                  className="h-4 w-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                />
                <label htmlFor="deadbody" className="ml-3 block text-sm font-medium text-gray-700">
                  Dead Body
                </label>
              </div>
              <div>
                <input
                  id="medical"
                  name="wasteType"
                  type="radio"
                  value="medical"
                  checked={selectedEwaste === 'medical'}
                  onChange={handleEwasteChange}
                  className="h-4 w-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                />
                <label htmlFor="medical" className="ml-3 block text-sm font-medium text-gray-700">
                  Medical Waste
                </label>
              </div>
              <div>
                <input
                  id="other"
                  name="wasteType"
                  type="radio"
                  value="other"
                  checked={selectedEwaste === 'other'}
                  onChange={handleEwasteChange}
                  className="h-4 w-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                />
                <label htmlFor="other" className="ml-3 block text-sm font-medium text-gray-700">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Images</label>
            <input
              id="images"
              type="file"
              multiple
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <button type="submit" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </div>

      <div className="w-1/2 pl-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Creative Work</h2>
          <p className="text-gray-700">This space can be used to display any creative content such as images, promotional materials, or important messages.</p>
          <img src="https://via.placeholder.com/400" alt="Creative" className="mt-4 rounded shadow-md"/>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
