import React,{useState} from 'react';
import MPagination from '@material-ui/lab/Pagination';

const Pagination = ({ articlesPerPage, totalResults, paginate, currentPage }) => {

  const noOfPages = Math.ceil(totalResults/articlesPerPage);

  const [page, setPage] = useState(currentPage);

  const handleChange = (e, value) => {
    paginate(value);
    setPage(value);
  }

  return(
      <MPagination shape="rounded" color="secondary" variant="outlined"
        page={page}
        count={noOfPages}
        onChange={handleChange}
      />
    );
};

export default Pagination;