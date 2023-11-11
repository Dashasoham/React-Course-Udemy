import React from 'react';

const Table = (props) => {
  const info = () => {
    return (
      <table className='table table-bordered table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th className='bg-primary text-white'>ID</th>
            <th className='bg-secondary text-white'>Title</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.id}>
              <td className='bg-info'>{item.id}</td>
              <td className='bg-light'>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='mt-4'>
      <h1 className='text-secondary'>Table </h1>
      {info()}
    </div>
  );
};

export default Table;
