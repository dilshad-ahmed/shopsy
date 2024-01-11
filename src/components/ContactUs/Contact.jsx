import React, { useState } from "react";

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    if (validateForm()) {
      // Submit the form (you can implement your submit logic here)
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Form validation failed");
    }
  };

  // Function to validate the form
  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Valid email is required";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    // Set form errors
    setFormErrors(errors);
    return valid;
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123 456 7890</p>
          {/* Add more contact information as needed */}
        </div>

        {/* Contact Form Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
