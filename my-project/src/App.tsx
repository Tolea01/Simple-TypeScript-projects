import React from 'react';
import { Succes } from './Components/Succes';
import Users from './Components/Users';
import { UserList } from './types-and-interfaces';

function App() {
  const [users, setUsers] = React.useState<UserList[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [invites, setInvites] = React.useState<number[]>([]);
  const [succes, setSucces] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(usersData => setUsers(usersData.data))
      .catch(err => alert(`Server Error: ${err}`))
      .finally(() => setIsLoading(false));
  }, []);

  const onChangheSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(id => id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSendInvites = () => setSucces(true);

  return (
    <div>
      {succes ? (
        <Succes count={invites.length} />
      ) : (
        <Users
          onChangheSearchValue={onChangheSearchValue}
          searchValue={searchValue}
          isLoading={isLoading}
          items={users}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;