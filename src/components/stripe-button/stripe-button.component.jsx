import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HF2SMAayDRFEI3NqLdU2j7zhxZe6ptNrB63mk83auRIf0E3eRrcDX82RvLerDiBOmj8DCdB1FjrT8MN9HJD8iqz00WzXoHmYd";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cueva"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total value is $${price}`}
      amount={priceForStripe}
      paneLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
