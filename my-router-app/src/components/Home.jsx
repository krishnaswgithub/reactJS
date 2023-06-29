

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div><h1>Welcome to AIRBUS</h1></div>
      <button
        onClick={() => {
          // Push a new route to the stack
          // navigate("order-summary");
          // Replace a new route
          navigate("order-summary");
        }}
      >
        Place Order
      </button>import { useNavigate } from "react-router-dom";
    </>
  );
};
