
type User = {
  id: number;
  name: string;
};


type UsersListProps = {
  users: Array<User>;
};


const UsersList = (props: UsersListProps) => {
  const { users } = props;
  return (
    <>
      <h1 style={{ color: "red" }}> Users </h1>
      <ul>
        {users.map((user: User) => {
          return <li key={user.id}> {user.login} </li>;
        })}
      </ul>
    </>
  );
};


export default UsersList;

