import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/api';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>  
        ))}
      </ul>
    </div>
  );
};

export default DataList;
