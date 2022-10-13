import './paginate.scss';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Table from '../Table';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type Props<T = {}> = {
  data: T[];
  itemsPerPage: number;
};

const PaginatedTable = <T extends {}>({ itemsPerPage: initItemsPerPage, data }: Props<T>) => {
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initItemsPerPage);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const newItems = data.slice(itemOffset, endOffset);
    setCurrentItems(newItems);
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Table data={currentItems} />

      <div className='paginate-container'>
        <div className='paginate__count'>
          <p>Showing</p>

          <select
            name='count'
            id='count'
            defaultValue={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            // onChange={(e) => console.log('Item count changed to: ', e.target.value)}
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
          </select>

          <p>out of {data.length}</p>
        </div>

        <ReactPaginate
          breakLabel='...'
          nextLabel={
            <div className='paginate__button'>
              <MdChevronRight />
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={
            <div className='paginate__button'>
              <MdChevronLeft />
            </div>
          }
          containerClassName='paginate'
          pageClassName='paginate__item'
          activeClassName='active'
        />
      </div>
    </>
  );
};

export default PaginatedTable;
