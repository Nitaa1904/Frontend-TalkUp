import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const CustomTable = ({
  title,
  subtitle,
  addButtonText,
  onAddClick,
  columns,
  data,
  actions,
  itemsPerPageOptions = [5, 10, 20],
  defaultItemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div>
      {(title || subtitle) && (
        <>
          {title && <h1 className="text-2xl font-bold mb-2">{title}</h1>}
          {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
        </>
      )}
      {addButtonText && onAddClick && (
        <button
          onClick={onAddClick}
          className="text-red-700 font-medium mb-6 hover:text-red-800 cursor-pointer"
        >
          + {addButtonText}
        </button>
      )}

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-md font-normal">
            {title ? `Tabel ${title}` : "Tabel Data"}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Tampilkan:</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="border border-gray-300 rounded px-5 py-1 text-sm"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option} Data
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-600">Dari {data.length} Data</span>
          </div>
        </div>
        <Table hoverable>
          <TableHead>
            <TableHeadCell>No</TableHeadCell>
            {columns.map((column, index) => (
              <TableHeadCell key={index}>{column.header}</TableHeadCell>
            ))}
            {actions && <TableHeadCell>Aksi</TableHeadCell>}
          </TableHead>
          <TableBody className="divide-y">
            {currentData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{startIndex + rowIndex + 1}</TableCell>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell>
                    <div className="flex gap-2">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={() => action.onClick(row)}
                          className={action.className}
                          title={action.title}
                        >
                          {action.icon}
                        </button>
                      ))}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {totalPages > 1 && (
          <div className="p-4 border-t border-gray-200 flex justify-end">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current"
              >
                &lt;
              </button>
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-2">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                      currentPage === page
                        ? "bg-red-700 text-white"
                        : "hover:bg-red-700 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current"
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomTable;