import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Logout } from "components/Logout";
import { UsersTable } from "components/adminComponents/UsersTable";
import { UserSearch } from "components/adminComponents/UserSearch";
import { Pagination } from "components/Pagination";

export const UsersSearch = () => {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const users = useSelector((store) => store.admin.users);
  const ROWS_ON_PAGE = 10;

  useEffect(() => {
    if (users) {
      setPages(Math.ceil(users.length / ROWS_ON_PAGE));
      const companieSlice = users.slice(
        currentPage * ROWS_ON_PAGE,
        currentPage * ROWS_ON_PAGE + ROWS_ON_PAGE
      );
      setUsersToDisplay(companieSlice);
    }
  }, [users, currentPage]);

  return (
    <div className="users-search">
      <UserSearch name={"users-search__input"} />
      <UsersTable users={usersToDisplay} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
      <Logout />
    </div>
  );
};
