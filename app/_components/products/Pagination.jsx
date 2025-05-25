'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const GetPagination = ({ currentPage, totalItems, limit }) => {
  const searchParams = useSearchParams();
  const [client, setClient] = useState(false);

  const totalPages = Math.ceil(totalItems / limit);

  const createPageLink = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page);
    return `?${params.toString()}`;
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex items-center space-x-1 bg-white px-2 py-1">
        {/* Previous Button */}
        <Link
          href={currentPage > 1 ? createPageLink(currentPage - 1) : '#'}
          className={`px-3 py-1 rounded-md text-sm border ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
        >
          Previous
        </Link>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={createPageLink(page)}
            className={`px-3 py-1 rounded-md text-sm border ${
              page === currentPage
                ? 'bg-blue-600 text-white border-blue-600'
                : 'text-gray-700 hover:bg-gray-100 border-gray-300'
            }`}
          >
            {page}
          </Link>
        ))}

        {/* Next Button */}
        <Link
          href={currentPage < totalPages ? createPageLink(currentPage + 1) : '#'}
          className={`px-3 py-1 rounded-md text-sm border ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
        >
          Next
        </Link>
      </nav>
    </div>
  );
};

export default GetPagination;
