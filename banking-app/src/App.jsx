import AccountStatus from "./components/AccountStatus";
import Balance from "./components/Balance";
import Banking from "./components/Banking";
import Auth from "./components/Auth";

const App = () => {
  return (
    <div>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
};

export default App;
