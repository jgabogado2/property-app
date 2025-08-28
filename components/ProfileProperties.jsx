'use client';
import { useState } from 'react';
import Image from 'next/image';

const ProfileProperties = ({ properties:inititalProperties }) => {
    const [properties, setProperties] = useState(inititalProperties);

    return properties.map((property) => (
                <div className="mb-10">
                  <a href="/property.html">
                    <Image
                      className="h-32 w-full rounded-md object-cover"
                      src="/properties/a1.jpg"
                      alt="Property 1"
                      width={0}
                      height={0}
                      sizes='100vh'
                    />
                  </a>
                  <div className="mt-2">
                    <p className="text-lg font-semibold">Property Title 1</p>
                    <p className="text-gray-600">Address: 123 Main St</p>
                  </div>
                  <div className="mt-2">
                    <a
                      href="/add-property.html"
                      className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </a>
                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
    ))
};
export default ProfileProperties;