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
      <h2>
        {me.role} {me.username}
      </h2>
      <span>
        {me.firstName} {me.lastName}
      </span>
      <p>
        {me.email}: {me.active ? 'activated' : 'deactivated'}
      </p>
    </div>
  );
};

export default UserData;
