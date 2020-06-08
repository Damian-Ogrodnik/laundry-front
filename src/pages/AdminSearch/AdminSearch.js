import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Logout } from "components/Logout";
import { UsersTable } from "components/adminComponents/UsersTable";
import { UserSearch } from "components/adminComponents/UserSearch";
import { Pagination } from "components/Pagination";

export const AdminSearch = () => {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [companiesToDisplay, setCompaniesToDisplay] = useState([]);
  const users = useSelector((store) => store.admin.users);
  const ROWS_ON_PAGE = 10;

  useEffect(() => {
    if (users) {
      setPages(Math.ceil(users.length / ROWS_ON_PAGE));
      const companieSlice = users.slice(
        currentPage * ROWS_ON_PAGE,
        currentPage * ROWS_ON_PAGE + ROWS_ON_PAGE
      );
      setCompaniesToDisplay(companieSlice);
    }
  }, [users, currentPage]);

  return (
    <div className="admin-search">
      <UserSearch name={"admin-search__input"} />
      <UsersTable users={companiesToDisplay} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
      <Logout />
    </div>
  );
};
