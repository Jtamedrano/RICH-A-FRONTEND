import { Button, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { v4 } from "uuid";
import { addSubscriber } from "../redux/actions";

const SignedIn = ({ rootClass, firstName }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <p className={`${rootClass}_existingSub`}>Welcome, {firstName}</p>
      <p
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "SIGNOUT_SUBSCRIBER" });
        }}
        className={`${rootClass}_signOutLink`}
      >
        This is not me
      </p>
      <button
        className={`${rootClass}__SupportDonateButton`}
        onClick={(e) => {
          e.preventDefault();
          history.push("/donate");
        }}
      >
        Support Our Movement & Donate
      </button>
    </>
  );
};

const CtaForm = ({ rootClass = "CTA" }) => {
  const sub = useSelector((state) => state.subscriber.currentSubscriber);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleChange = (e) => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    console.log("click");
    dispatch(addSubscriber({ ...formState, id: v4() }));
  };

  return (
    <Form
      layout="vertical"
      form={form}
      className={rootClass}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      {sub && sub.firstName ? (
        <SignedIn rootClass={rootClass} firstName={sub.firstName} />
      ) : (
        <>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} wrap={true}>
            <Col span="12">
              <Form.Item label="First Name" name="firstname">
                <Input
                  className={`${rootClass}__firstNameInput`}
                  // placeholder="First Name"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col span="12">
              <Form.Item label="Last Name" name="lastname">
                <Input
                  className={`${rootClass}__lastNameInput`}
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <Form.Item label="Email" name="email">
                <Input
                  className={`${rootClass}__emailInput`}
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span="12" flex="auto">
              <Button
                style={{ width: "100%" }}
                type="primary"
                className={`${rootClass}__SignUpButton`}
                onClick={handleSignUpClick}
              >
                Sign Up
              </Button>
              {/* <button className={`${rootClass}__SignUpButton`}>Sign Up</button> */}
            </Col>
            <Col span="12" flex="auto">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/donate");
                }}
                style={{ width: "100%" }}
                type="primary"
                className={`${rootClass}__DonateButton`}
              >
                Donate
              </Button>
              {/* <button className={`${rootClass}__DonateButton`}>Donate</button> */}
            </Col>
          </Row>
        </>
      )}
    </Form>
  );
};

export default CtaForm;
