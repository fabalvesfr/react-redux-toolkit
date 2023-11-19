import { useState } from "react";
import { login, logout } from "../store.ts";
import { useDispatch } from "react-redux"; // useDispatch is for modifying states, and useSelector is for getting states

export const Login = () => {
  const [newUserName, setNewUserName] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <h1>THIS IS THE LOGIN PAGE</h1>
      <input type="text" onChange={(e) => setNewUserName(e.target.value)} />
      <button onClick={() => dispatch(login({ username: newUserName }))}>
        Submit login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
