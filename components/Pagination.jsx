import Link from 'next/link';

const Pagination = ({ page = 1, pageSize = 9, totalItems = 0 }) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, parseInt(page, 10) || 1), totalPages);

  const createPageLink = (targetPage) => {
    const params = new URLSearchParams();
    params.set('page', String(targetPage));
    params.set('pageSize', String(pageSize));
    return `/properties?${params.toString()}`;
  };

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  if (totalPages <= 1) return null;

  return (
    <div className='flex items-center justify-center gap-2 mt-8'>
      <Link
        href={canGoPrev ? createPageLink(currentPage - 1) : '#'}
        aria-disabled={!canGoPrev}
        className={`px-4 py-2 rounded border ${canGoPrev ? 'text-gray-800 border-gray-300 hover:bg-gray-100' : 'text-gray-400 border-gray-200 cursor-not-allowed'}`}
      >
        Previous
      </Link>
      <span className='text-sm text-gray-600'>
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={canGoNext ? createPageLink(currentPage + 1) : '#'}
        aria-disabled={!canGoNext}
        className={`px-4 py-2 rounded border ${canGoNext ? 'text-gray-800 border-gray-300 hover:bg-gray-100' : 'text-gray-400 border-gray-200 cursor-not-allowed'}`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
