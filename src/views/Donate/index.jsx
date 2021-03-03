import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useElements,
  useStripe,
  CardElement,
} from "@stripe/react-stripe-js";
import { Button, Input, InputNumber } from "antd";
import { useHistory } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

const promise = loadStripe(
  "pk_live_51ILuGXJAmJznCXFu6m8PsTPqp7Dmpkkllug5HnD7Zp2OA1zwPU1TVoxrXcfkbgLAKC5T0un9juVXkUXJ7BjxO69n00FnnOLh06"
);

const SelectionButton = ({ value, setDonationAmount }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setDonationAmount(value);
  };
  return (
    <div className="selectDonationBtn" onClick={handleClick}>
      ${value}
    </div>
  );
};

const donationOptions = [5, 10, 20, 25, 50, 100];

const DonationSelect = (props) => {
  const { userName, userEmail } = props.user;
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    await axios
      .post("https://corvallis-campaign-backend.herokuapp.com/secret", {
        total: props.donateAmount * 100,
      })
      .then(async (res) => {
        const result = await stripe.confirmCardPayment(res.data.client_secret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: !!userEmail ? userEmail : "",
              name: !!userName ? userName : "",
            },
          },
        });
        if (result.error) {
          setError(result.error.message);
        } else {
          if (result.paymentIntent.status === "succeeded") {
            console.log("payment success");
            history.push("/payment-confirmation/" + props.donateAmount * 100);
          }
        }
      });
  };

  return (
    <div className="payment">
      <h2>Support Our Mission</h2>
      <div className="optionButtonRack">
        {donationOptions.map((option) => {
          return (
            <SelectionButton
              key={option}
              value={option}
              setDonationAmount={(amount) => props.setDonateAmount(amount)}
            />
          );
        })}
        <div className="inputWrapper">
          <label htmlFor="valueInput">Custom Donation (USD) </label>
          <InputNumber
            id="valueInput"
            defaultValue={0.0}
            className="valueInput"
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            value={props.donateAmount}
            onChange={(value) => {
              props.setDonateAmount(value);
            }}
            min={0.01}
            placeholder="Custom Amount"
          />
        </div>
      </div>
      {props.donateAmount > 0 && (
        <div className="paymentArea">
          <p>You selected a one-time payment of ${props.donateAmount}.</p>
          <div className="paymentDetail">
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </form>
            <Button
              disabled={!stripe}
              id="submitPaymentButton"
              onClick={handleSubmit}
            >
              <span>{processing ? "processing" : "Submit"}</span>
            </Button>
            {error && <p>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

const DonateView = () => {
  const [donateAmount, setDonateAmount] = useState(undefined);
  const [donationSlide, setDonationSlide] = useState(0);
  const user = useSelector((state) => {
    if (state.subscriber.currentSubscriber !== null) {
      const { firstName, lastName, email } = state.subscriber.currentSubscriber;
      return {
        userName: `${firstName} ${lastName}`,
        userEmail: email,
      };
    }
  });
  const [inputUser, setInputUser] = useState({
    userName: "",
    userEmail: "",
  });
  useEffect(() => {
    setDonateAmount(undefined);
  }, []);

  const handleUserInputChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };

  const pushToNextSlide = () => {
    setDonationSlide(donationSlide + 1);
  };

  const ready =
    donationSlide === 1 ||
    user?.userName !== undefined ||
    inputUser?.userName !== "";

  return (
    <>
      <div className="paymentBackground">
        <img src="/images/students.png" alt="students graduating" />
      </div>
      <div className="paymentView">
        {donationSlide === 0 && user?.userName === undefined && (
          <div className="payment-prescreen">
            <div>
              <h2>Billing Information</h2>
              <hr />
              <div>
                <label>First Name: </label>
                <Input
                  name="userName"
                  placeholder="First Name"
                  onChange={handleUserInputChange}
                />
              </div>
              <div>
                <label>Email: </label>
                <Input
                  name="userEmail"
                  placeholder="E-mail"
                  onChange={handleUserInputChange}
                />
              </div>
            </div>
            <Button
              onClick={() => pushToNextSlide()}
              style={{ margin: ".5em 0" }}
            >
              Continue
            </Button>
            <p style={{ fontSize: "0.8em" }}>
              Leave Empty For Anonymous Donation
            </p>
          </div>
        )}
        {ready && (
          <Elements stripe={promise}>
            <DonationSelect
              user={user?.userName !== undefined ? user : inputUser}
              donateAmount={donateAmount}
              setDonateAmount={(amount) => setDonateAmount(amount)}
              pushToNextSlide={pushToNextSlide}
            />
          </Elements>
        )}
      </div>
    </>
  );
};

export default DonateView;
