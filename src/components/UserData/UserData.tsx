import * as React from 'react';
import { useMeQuery } from '../../generated/graphql';

const UserData = () => {
  const { data, error, loading } = useMeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const me = data && data.me;

  return (
    <div>
      <h2>{me.username}</h2>
    </div>
  );
};

export default UserData;
