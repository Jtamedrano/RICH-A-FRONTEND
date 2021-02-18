import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useElements,
  useStripe,
  CardElement,
} from "@stripe/react-stripe-js";
import { Button, InputNumber } from "antd";
import { useHistory } from "react-router";
import axios from "axios";

const promise = loadStripe(
  "pk_test_51ILuGXJAmJznCXFuA4TOyAXzithQO6UzkcqhuYnw8l6JvixiHCphevXjKgzvTLAcx2UK2KpKENlP2nuTC2K6sOzy00Rtuv5QND"
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
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

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
          },
        });
        if (result.error) {
          setError(result.error.message);
        } else {
          if (result.paymentIntent.status === "succeeded") {
            console.log("payment success");
            history.push("/");
          }
        }
      });
  };

  return (
    <div className="payment">
      <div>Choose An Amount</div>
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
      {props.donateAmount && (
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

  useEffect(() => {
    setDonateAmount(undefined);
  }, []);

  const pushToNextSlide = () => {
    setDonationSlide(donationSlide + 1);
  };

  return (
    <div className="paymentView">
      <h2>Donation Page</h2>

      {donationSlide === 0 && (
        <Elements stripe={promise}>
          <DonationSelect
            donateAmount={donateAmount}
            setDonateAmount={(amount) => setDonateAmount(amount)}
            pushToNextSlide={pushToNextSlide}
          />
        </Elements>
      )}
    </div>
  );
};

export default DonateView;
