import { Tabs, Tab } from 'baseui/tabs-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import data from '../data';
import Table from './Table';
import Chart from './Chart';
import React from 'react';

const List = () => {
  const [activeKey, setActiveKey] = useState('0');
  const navigate = useNavigate();

  // const componentMapping = {};

  const sortedData = data.sort((a, b) => a.order - b.order);

  const info = () => {
    return (
      <ul className='list-group'>
        {sortedData.map((item) => (
          <li key={item.id} className='list-group-item border p-3 bg-light'>
            {item.title}
          </li>
        ))}
      </ul>
    );
  };

  // sortedData.forEach((item, index) => {
  //   componentMapping[index.toString()] = `/${item.id}`;
  // });

  const componentMapping = {
    0: '/',
    1: '/table',
    2: '/chart',
  };

  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        if (activeKey === '0') {
          setActiveKey('0');
          navigate('/');
        } else {
          setActiveKey(activeKey);
          navigate(componentMapping[activeKey]);
        }
      }}
    >
      <Tab title='List'>
        <div className='mt-4'>
          <h1 className='text-secondary'>List </h1>
          <div>{info()}</div>
        </div>
      </Tab>
      <Tab title='Table'>
        <div className='mt-4'>
          <Table data={sortedData} />
        </div>
      </Tab>
      <Tab title='Chart'>
        <div className='mt-4'>
          <Chart />
        </div>
      </Tab>
    </Tabs>
  );
};

export default List;
