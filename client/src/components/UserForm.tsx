import React, { useState } from 'react';

const states = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
"Delaware", "Florida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa",
"Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
"Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
"Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
"North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
"South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
"Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

interface FormProps {
  formType: 'employee' | 'employer';
}

function Form({ formType }: FormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    state: '',
    gender: '',
    birthdate: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    city: false,
    state: false,
    gender: false,
    birthdate: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      phoneNumber: formData.phoneNumber.trim() === '',
      city: formData.city.trim() === '',
      state: formData.state.trim() === '',
      gender: formData.gender.trim() === '',
      birthdate: formData.birthdate.trim() === '',
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {formType === 'employee' ? 'Employee Form' : 'Employer Form'}
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">Phone number is required.</p>}
        </div>

        {/* City Input */}
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">City is required.</p>}
        </div>

        {/* State Input */}
        <div className="mb-4">
        <label className="block text-gray-700">State</label>
        <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    className={`w-full px-3 py-2 border rounded-lg ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
  >
    <option value="" disabled>Select your state</option>
    {states.map((state, index) => (
      <option key={index} value={state}>{state}</option>
    ))}
  </select>
  {errors.state && <p className="text-red-500 text-sm mt-1">State is required.</p>}
</div>


        {/* Gender Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">Gender is required.</p>}
        </div>

        {/* Birthdate Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Birthdate</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.birthdate ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.birthdate && <p className="text-red-500 text-sm mt-1">Birthdate is required.</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

console.log("test tes tes test test test tessssss")