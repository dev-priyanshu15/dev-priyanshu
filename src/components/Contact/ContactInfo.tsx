import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5" aria-hidden="true" />,
      title: 'Email',
      value: 's.priyanshu.coder@gmail.com',
      link: 'mailto:s.priyanshu.coder@gmail.com',
      ariaLabel: 'Send an email to s.priyanshu.coder@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" aria-hidden="true" />,
      title: 'Phone',
      value: '+91 969-327-1783',
      link: 'tel:+919693271783',
      ariaLabel: 'Call +91 969-327-1783',
    },
    {
      icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
      title: 'Location',
      value: 'Bangalore, India',
    },
    {
      icon: <Clock className="w-5 h-5" aria-hidden="true" />,
      title: 'Available Hours',
      value: '9:00 AM - 6:00 PM IST',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-indigo-400 mb-4">
        Contact Information
      </h3>
      <div className="space-y-4">
        {contactDetails.map((detail) => (
          <div
            key={detail.title}
            className="flex items-start gap-4 text-gray-300 hover:text-indigo-400 transition-colors"
          >
            <div className="p-2 bg-gray-800 rounded-lg">{detail.icon}</div>
            <div>
              <h4 className="font-medium">{detail.title}</h4>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-sm hover:underline"
                  aria-label={detail.ariaLabel}
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-sm">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;