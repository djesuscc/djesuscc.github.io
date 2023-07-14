import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({
  setPageNumber,
  infoPages,
}) => {
  return (
    <>
      <ReactPaginate
        className='pagination d-flex justify-content-end py-5'
        pageCount={infoPages.pages}
        pageRangeDisplayed={2}
        previousClassName='btn btn-primary rounded-end-0'
        nextClassName='btn btn-primary rounded-start-0'
        nextLabel='Next'
        previousLabel='Previous'
        previousLinkClassName='text-light link-underline link-underline-opacity-0'
        nextLinkClassName='text-light link-underline link-underline-opacity-0'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        breakLinkClassName='d-none'
        activeClassName='active'
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </>
  )
}

export default Pagination