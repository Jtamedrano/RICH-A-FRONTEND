import React from "react";
import { useParams } from "react-router";

const PaymentConfirmationView = () => {
  const { payment } = useParams();
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Thank you for your donation!</h1>
      <p>
        You made a payment of $
        {`${payment.substr(0, payment.length - 2)}.${payment.substr(
          payment.length - 2
        )}`}
      </p>
      <p>Feel free to check your email for a copy this donation.</p>
    </div>
  );
};

export default PaymentConfirmationView;
