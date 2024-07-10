import React, { useState } from "react";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [email, setEmail] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <>
      <section className="pt-12 md:px-20 lg:px-52">
        <div className="bg-primary px-5 pb-5 md:p-10">
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-lg md:text-2xl font-semibold ">
              Payment Details
            </h1>
            <p className="text-gray-100">
              Complete your purchase by providing your payment details
            </p>
          </div>

          <form action="" className="flex flex-col gap-5 mt-9 text-white">
            <div className="flex flex-col gap-2 h-20">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Immalex02@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="h-full p-3"
              />
            </div>
            <div className="flex flex-col gap-2 h-20">
              <h1>Select payment method</h1>
              <div className="flex gap-3 w-full text-black">
                <div className="flex items-center justify-between bg-white w-1/2 p-5">
                  <label>Credit Card</label>
                  <input
                    type="radio"
                    id="credit_card"
                    name="payment_method"
                    value="credit_card"
                    checked={paymentMethod === "credit_card"}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center justify-between bg-white w-1/2 p-5">
                  <label>Virtual Account</label>
                  <input
                    type="radio"
                    id="virtual_account"
                    name="payment_method"
                    value="virtual_account"
                    checked={paymentMethod === "virtual_account"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-20">
              <label htmlFor="cardNumber">Card details</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="8888 9999 9999 8888"
                disabled={paymentMethod !== "credit_card"}
                className="h-full p-3"
              />
            </div>
            <div className="flex gap-3 justify-between">
              <div className="flex flex-col gap-2 h-20 w-1/2">
                <label htmlFor="cardExpiry">Expiry Date</label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={cardExpiry}
                  placeholder="MM/YY"
                  maxLength={5}
                  onChange={handleChange}
                  className="h-full p-3"
                />
              </div>
              <div className="flex flex-col gap-2 h-20 w-1/2 text-gray-800">
                <label htmlFor="cardCvv">CVV</label>
                <input
                  type="text"
                  name="cardCvv"
                  value={cardCvv}
                  placeholder="123"
                  maxLength={4}
                  onChange={handleChange}
                  className="h-full p-3 "
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-2 my-5 px-5 md:px-0">
          <div className="flex justify-between">
            {" "}
            <h4 className="text-gray-600">Sub Total</h4> <p>$650</p>
          </div>
          <div className="flex justify-between">
            {" "}
            <h4 className="text-gray-600">Discount</h4> <p>$0</p>
          </div>
          <div className="flex justify-between">
            {" "}
            <h4>Total</h4> <p>$650</p>
          </div>
          <button className="text-white bg-secondary hover:bg-tertiary flex items-center justify-center text-lg md:text-2xl font-semibold h-10 p-2">
            Make Payment
          </button>
        </div>
        
      </section>
      <footer className="md:absolute lg:relative bottom-0 w-full flex bg-secondary text-white font-semibold justify-center px-5 md:px-20 py-3 md:mt-3">
        <h1 className="flex cursor-pointer self-center">
          {" "}
          2024 Copyright All Rights Reserved
        </h1>
      </footer>
    </>
  );
}

export default Checkout;
