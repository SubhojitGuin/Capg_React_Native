import React from "react";

export default function useRequestFilters() {
  const [searchConditions, setSearchConditions] = React.useState({
    searchText: '',
    category: '',
    status: '',
    priority: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });

  return [ searchConditions, setSearchConditions ];
}