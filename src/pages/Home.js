import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);
  return (
    <div>
      THIS IS THE HOME PAGE {username && <div>FOR</div>}
      {username.toUpperCase()}
    </div>
  );
};
