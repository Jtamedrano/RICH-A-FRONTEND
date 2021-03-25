import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ path, JSXElement, exact = false }) => {
  const admin = useSelector((state) => state.admin.admin);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return admin ? <JSXElement /> : <Redirect to="/admin" />;
      }}
    />
  );
};

export default AdminRoute;
