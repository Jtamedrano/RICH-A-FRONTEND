import { Route } from "react-router";
import AdminRoute from "./components/AdminRoute";
import Account from "./views/Account";
import MainHome from "./views/MainHome";
import Root from "./views/Root/index";

const AdminView = (props) => {
  return (
    <>
      <AdminRoute path="/admin/account" JSXElement={Account} />
      <AdminRoute path="/admin/home" JSXElement={MainHome} />
      <Route exact path="/admin/" component={Root} />
    </>
  );
};

export default AdminView;
