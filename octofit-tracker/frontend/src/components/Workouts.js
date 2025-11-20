import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [data, setData] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Workouts API endpoint:', endpoint);
        console.log('Fetched data:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <div className="mt-4">
      <h2 className="mb-3 text-danger">Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id || idx}>
                <td>{item.name || '-'}</td>
                <td>{item.type || '-'}</td>
                <td>{item.duration || '-'}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workouts;
