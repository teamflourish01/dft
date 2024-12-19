import React from "react";
import "../Cancellation/cancel.css";
import Banner from "../banner/Banner";
const Cancellation = () => {
  return (
    <>
 <div className="banner">
    <Banner currentTabName="Cancellation & Refund Policy" />
</div>
   
      <div className="terms-container">

      <div className="terms-title">Cancellation & Refund Policy</div>
      
      <div className="cancellation-first">
        DFT Alumni Family believes in helping its customers as far as possible,
        and has therefore a liberal cancellation policy. Under this policy:
      </div>
      <div className="terms-contain">
        <div className="black">
          Cancellations will be considered only if the request is made within
          same day of placing the order. However, the cancellation request may
          not be entertained if the orders have been communicated to the
          vendors/merchants and they have initiated the process of shipping
          them.
        </div>
        <div className="terms-p black">
          DFT Alumni Family does not accept cancellation requests for perishable
          items like flowers, eatables etc. However, refund/replacement can be
          made if the customer establishes that the quality of product delivered
          is not good.
        </div>
        <div className="black">
          In case of receipt of damaged or defective items please report the
          same to our Customer Service team. The request will, however, be
          entertained once the merchant has checked and determined the same at
          his own end. This should be reported within same day of receipt of the
          products.
        </div>
        <div className="terms-p black">
          In case you feel that the product received is not as shown on the site
          or as per your expectations, you must bring it to the notice of our
          customer service within same day of receiving the product. The
          Customer Service Team after looking into your complaint will take an
          appropriate decision.
        </div>
        <div className="black">
          In case of complaints regarding products that come with a warranty
          from manufacturers, please refer the issue to them.
        </div>
        <div className="terms-p black">
          In case of any Refunds approved by the DFT Alumni Family, it’ll take
          3-4 days for the refund to be processed to the end customer.
        </div>
       

        <div className="disclaimer">
      <span className="semi-bold">Disclaimer</span>
      <div >The above content is created at DFT Alumni Family's sole
        discretion. Razorpay shall not be liable for any content provided here
        and shall not be responsible for any claims and liability that may arise
        due to merchant’s non-adherence to it.
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Cancellation;
