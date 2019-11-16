import React, { useState, useEffect } from "react";
import Table from "./table";

const MoviesTable = props => {
  const [columns, setColumns] = useState(null);

  //Create columns:
  useEffect(() => {
    let newColumns = [
      { path: "genre", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" }
    ];

    // const deleteColumn = {
    //   key: "delete",
    //   content: movie => (
    //     <button
    //       onClick={() => props.onDelete(movie)}
    //       className="btn btn-danger btn-sm"
    //     >
    //       Delete
    //     </button>
    //   )
    // };

    //   const user = auth.getCurrentUser();
    //   if (user && user.isAdmin) {
    //     newColumns.push(deleteColumn);
    //   }
    setColumns(newColumns);
  }, []);

  //const { data  } = props;
  const data = [
    { genre: "Action", numberInStock: "4", dailyRentalRate: "5" },
    { genre: "Horror ", numberInStock: "5", dailyRentalRate: "6" },
    { genre: "Kukk", numberInStock: "6", dailyRentalRate: "7" },
    { genre: "UHC", numberInStock: "7", dailyRentalRate: "8" },
    { genre: "Fun", numberInStock: "8", dailyRentalRate: "9" },
    { genre: "Action", numberInStock: "4", dailyRentalRate: "5" },
    { genre: "Horror ", numberInStock: "5", dailyRentalRate: "6" },
    { genre: "Kukk", numberInStock: "6", dailyRentalRate: "7" },
    { genre: "UHC", numberInStock: "7", dailyRentalRate: "8" },
    { genre: "Fun", numberInStock: "8", dailyRentalRate: "9" },
    { genre: "Action", numberInStock: "4", dailyRentalRate: "5" },
    { genre: "Horror ", numberInStock: "5", dailyRentalRate: "6" },
    { genre: "Kukk", numberInStock: "6", dailyRentalRate: "7" },
    { genre: "UHC", numberInStock: "7", dailyRentalRate: "8" },
    { genre: "Fun", numberInStock: "8", dailyRentalRate: "9" },
    { genre: "Action", numberInStock: "4", dailyRentalRate: "5" },
    { genre: "Horror ", numberInStock: "5", dailyRentalRate: "6" },
    { genre: "Kukk", numberInStock: "6", dailyRentalRate: "7" },
    { genre: "UHC", numberInStock: "7", dailyRentalRate: "8" },
    { genre: "Fun", numberInStock: "8", dailyRentalRate: "9" },
    { genre: "Action", numberInStock: "4", dailyRentalRate: "5" },
    { genre: "Horror ", numberInStock: "5", dailyRentalRate: "6" },
    { genre: "Kukk", numberInStock: "6", dailyRentalRate: "7" },
    { genre: "UHC", numberInStock: "7", dailyRentalRate: "8" },
    { genre: "Fun", numberInStock: "8", dailyRentalRate: "9" },
    { genre: "Fun", numberInStock: "8", dailyRentalRate: "9" }
  ];

  return <Table columns={columns} data={data} />;
};

export default MoviesTable;
