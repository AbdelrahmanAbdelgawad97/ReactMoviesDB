import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';

const Pagimation = ({getPageOfMovies, pageCount}) => {
    const handlePageClick=(data)=>{
      getPageOfMovies(data.selected+1);
    }
// data return an object start with 0 and data.selected return the value 

  return (
    <>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center my-5"}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  )
}

export default Pagimation;
