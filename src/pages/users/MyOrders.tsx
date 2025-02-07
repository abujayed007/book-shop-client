import { useGetAllOrdersQuery } from "../../redux/api/orderApi";

const MyOrders = () => {
  const { data } = useGetAllOrdersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>My Orders</h1>
    </div>
  );
};

export default MyOrders;
