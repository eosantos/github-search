import UserItems from "./UserItems";
import spiner from "../../loading.gif";
import Search from "../layout/Search";

const Users = () => {
  return (
    <>
      <div className="px-4 bg-gray-900">
        <Search />
      </div>
      <div className={tailwind.grid}>
        {<img src={spiner} alt="Spiner" className="mx-auto" />}
        {(user) => <UserItems key={user.node_id} user={user} />}
      </div>
    </>
  );
};

const tailwind = {
  grid: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
};

export default Users;
