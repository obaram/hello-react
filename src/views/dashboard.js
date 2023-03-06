import UsersList from "../components/organisms/users-list/users-list";

export const Dashboard = ({users, deleteUser}) => {
    return (
        <UsersList users={users} deleteUser={deleteUser}/>
    )
}

export default Dashboard;
