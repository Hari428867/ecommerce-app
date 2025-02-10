import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-4">
        Have any questions? Need help? Click the button below to send us a message.
      </p>

      <a 
        href="https://formsubmit.co/el/zuweyo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Contact Us
      </a>

      <div className="mt-8 text-gray-700">
        <p>📧 Email: support@yourecommercestore.com</p>
        <p>📍 Location: Hyderabad, India</p>
      </div>
    </div>
  );
}

export default Contact;
