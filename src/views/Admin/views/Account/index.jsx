import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../../../firebase";
import { useHistory } from "react-router";

const Account = (props) => {
  const admin = useSelector((state) => state.admin.admin);

  const dispatch = useDispatch();
  const history = useHistory();
  const [cred, setCred] = useState({
    username: admin.username,
    oldPassword: "",
    newPassword: "",
    confPassword: "",
  });

  useEffect(() => {
    if (!admin.name) {
      history.replace("/admin");
    }
  }, [admin, history]);

  const handleChange = (e) => {
    if (e.target.name !== "id") {
      setCred({ ...cred, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = updatePassword(cred);
    console.log(update);
    update.then((data) => {
      if (data.username) {
        history.push("/admin");
        dispatch({ type: "logout" });
      }
    });
  };

  return (
    <div className="accountSettings">
      <header>
        <h1>Account Setting</h1>
        <Button onClick={() => history.push("/admin/home")}>Home</Button>
      </header>
      <main>
        <div className="showUser">
          <div>
            <h2>Username</h2>
          </div>
          <div>
            <p>{admin.username}</p>
          </div>
        </div>
        <div className="changePassword">
          <div>
            <h2>Change Password</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="inputGroup">
                <label htmlFor="oldPassword">Old Password</label>
                <Input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={cred.oldPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="newPassword">New Password</label>
                <Input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={cred.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="confPassword">Confirm New Password</label>
                <Input
                  type="password"
                  name="confPassword"
                  id="confPassword"
                  value={cred.confPassword}
                  onChange={handleChange}
                />
              </div>
              <Button htmlType="submit">Change Password</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
