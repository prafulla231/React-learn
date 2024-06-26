import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="mb-4">
            <li className="hover:underline"><a href="#home">Home</a></li>
            <li className="hover:underline"><a href="#services">Services</a></li>
            <li className="hover:underline"><a href="#about">About Us</a></li>
            <li className="hover:underline"><a href="#contact">Contact</a></li>
          </ul>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded border border-gray-600"
            />
            <textarea
              placeholder="Your suggestions or comments"
              className="p-2 rounded border border-gray-600 h-24"
            />
            <button className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 WasteWipe. All rights reserved.</p>
        <p>1234 Street Name, City, State, 12345</p>
        <p><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
        <p><a href="mailto:info@wastewipe.com" className="hover:underline">info@wastewipe.com</a></p>
        <p><a href="#privacy" className="hover:underline">Privacy Policy</a> | <a href="#terms" className="hover:underline">Terms of Service</a></p>
      </div>
    </footer>
  );
}

export default Footer;
