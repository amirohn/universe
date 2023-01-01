import { DataCollector } from "../components/atoms/customers/dataCollector";
import { CustomerList } from "../components/atoms/customers/object";

const Profile = () => {
  const storeUser = new CustomerList([]);

  return (
    <div>
      <DataCollector storeUser={storeUser} />
      hi
    </div>
  );
};

export default Profile;
