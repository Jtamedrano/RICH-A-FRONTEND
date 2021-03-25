import { Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin } from "../../../../firebase";

const Root = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Root;

const LoginForm = () => {
  const [cred, setCred] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signin(cred).then((data) => {
      if (data) {
        dispatch({ type: "loggedIn", payload: data });
        history.replace("/admin/home");
      } else {
        setErr("Invalid Credentials");
      }
    });
  };
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <div className="adminWindowContainer">
      <form onSubmit={handleLogin} className="login-form">
        {err && <p>{err}</p>}
        <h1>Administrator</h1>
        <div className="input-group">
          <label htmlFor="UserNameInput">Username</label>
          <Input
            id="UserNameInput"
            type="text"
            name="username"
            value={cred.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="PasswordInput">Password</label>
          <Input
            id="PasswordInput"
            type="password"
            name="password"
            value={cred.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
