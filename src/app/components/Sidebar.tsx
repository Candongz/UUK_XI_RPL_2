import React from 'react';
import Link from 'next/link';
import { MdHome } from 'react-icons/md';
import { FaList } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const Sidebar = () => {
  const menuSections = [
    {
      heading: 'Dashboard',
      items: [
        { icon: <MdHome color='skyblue' size={20} />, label: 'Home', href: '/' },
        { icon: <FaList color='skyblue' size={20} />, label: 'Inventory', href: '/inventory' },
        { icon: <FaUser color='skyblue' size={20} />, label: 'All Accounts', href: '/account' },
        { icon: <FaFileInvoiceDollar color='skyblue' size={20} />, label: 'Transactions', href: '/transactions' },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-50 shadow-md h-screen pt-8 flex flex-col justify-between">
      <div>
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="px-6 py-2 text-gray-600 font-semibold text-sm uppercase tracking-wide">
              {section.heading}
            </h3>
            <div className="flex flex-col">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">&copy; 2024 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;