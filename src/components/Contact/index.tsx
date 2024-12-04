import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-400">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;