import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  const ButtonClasses =
    "px-6 py-2 border-2 text-white border-white duration-200 hover:bg-red-700 hover:border-red-700 max-md:flex-1";
  return (
    <div className="flex max-md:flex-col gap-4 justify-center gap-4">
      <div className="flex">
        {page !== 1 && (
          <button
            className={ButtonClasses}
            onClick={() => {
              setPage(page <= 11 ? 1 : page - 10);
            }}
          >
            -- Prev Page
          </button>
        )}
        {page !== 1 && (
          <button
            className={ButtonClasses}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev Page
          </button>
        )}
      </div>

      <div
        className={` px-6 text-center py-2 border-2 text-white  border-red-700`}
      >
        Page: {page}
      </div>
      <div className="flex">
        {totalPages !== page && (
          <button
            className={ButtonClasses}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next Page
          </button>
        )}
        {totalPages !== page && (
          <button
            className={ButtonClasses}
            onClick={() => {
              setPage(page >= totalPages - 10 ? totalPages : page + 10);
            }}
          >
            Next Page ++
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
