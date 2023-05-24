import React, { useState, useEffect } from 'react';

const UserProfile = React.memo(() => {
  const [userData, setUserData] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })

      .then((data) => {
        setUserData(data.results[0]);
        setIsDataFetched(true);
      })

      .catch((error) => console.error(error));
  }, []);

  if (!isDataFetched) {
    return <p>Loading user data...</p>;
  }
  return (
    <div>
      {userData ? (
        <div>
          <p>
            Name: {userData.name.title} {userData.name.first}{' '}
            {userData.name.last}
          </p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
});

export default UserProfile;
