import React from 'react'
import useRequestFilters from '../hooks/useRequestFilters';
import SearchAndFiltersComponent from './SearchAndFiltersComponent';
import RequestList from './RequestList';
import { fetchCategories } from '../services/CategoryService';

function Dashboard({ requests, onRefresh }) {

  const [categories, setCategories] = React.useState([]);
  const [searchConditions, setSearchConditions] = useRequestFilters();

  React.useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data));
  }, []);

  const filteredRequests = React.useMemo(() => {
    return requests.filter((req) => {
      const matchesSearchText = req.title.toLowerCase().includes(searchConditions.searchText.toLowerCase());
      const matchesCategory = searchConditions.category ? req.category === searchConditions.category : true;
      const matchesStatus = searchConditions.status ? req.status === searchConditions.status : true;
      const matchesPriority = searchConditions.priority ? req.priority === searchConditions.priority : true;
      return matchesSearchText && matchesCategory && matchesStatus && matchesPriority;
    });
  }, [requests, searchConditions.searchText, searchConditions.category, searchConditions.status, searchConditions.priority]);

  const sortedRequests = React.useMemo(() => {
    if (!searchConditions.sortBy) return filteredRequests;

    if (searchConditions.sortBy === 'title') {
      return [...filteredRequests].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return searchConditions.sortOrder === 'asc' ? -1 : 1;
        if (titleA > titleB) return searchConditions.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return [...filteredRequests].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return searchConditions.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [filteredRequests, searchConditions.sortBy, searchConditions.sortOrder]);

  return (
    <div className="flex-grow-1 d-flex flex-column gap-3">
      <SearchAndFiltersComponent
        categories={categories} 
        searchConditions={searchConditions} 
        setSearchConditions={setSearchConditions}
      />
      
      <RequestList requests={sortedRequests} onRefresh={onRefresh} />
    </div>
  )
}

export default React.memo(Dashboard);