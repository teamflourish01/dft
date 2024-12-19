import React from "react";
import "../Termscondition/terms.css";
import Banner from "../banner/Banner";
const Terms = () => {
  return (
    <>
  <div className="banner">
    <Banner currentTabName="Terms & Conditions" />
</div>
  
    <div className="terms-container">
      <div className="terms-title">Terms & Conditions</div>

      <div className="terms-contain">
        <div className="black">
          For the purpose of these Terms and Conditions, The term "we", "us",
          "our" used anywhere on this page shall mean DFT Alumni Family, whose
          registered/operational office is in Ahmedabad. "you", “your”, "user",
          “visitor” shall mean any natural or legal person who is visiting our
          website and/or agreed to purchase from us.
        </div>
        <div className="terms-p black">
          Your use of the website and/or purchase from us are governed by
          following Terms and Conditions:
        </div>
        <div className="black">
          The content of the pages of this website is subject to change without
          notice.
        </div>
        <div className="terms-p black">
          Neither we nor any third parties provide any warranty or guarantee as
          to the accuracy, timeliness, performance, completeness or suitability
          of the information and materials found or offered on this website for
          any particular purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors and we expressly exclude
          liability for any such inaccuracies or errors to the fullest extent
          permitted by law.
        </div>
        <div className="black">
          Your use of any information or materials on our website and/or product
          pages is entirely at your own risk, for which we shall not be liable.
          It shall be your own responsibility to ensure that any products,
          services or information available through our website and/or product
          pages meet your specific requirements.
        </div>
        <div className="terms-p black">
          Our website contains material which is owned by or licensed to us.
          This material includes, but are not limited to, the design, layout,
          look, appearance and graphics. Reproduction is prohibited other than
          in accordance with the copyright notice, which forms part of these
          terms and conditions.
        </div>
        <div className="black">
          All trademarks reproduced in our website which are not the property
          of, or licensed to, the operator are acknowledged on the website.
        </div>
        <div className="terms-p black">
          Unauthorized use of information provided by us shall give rise to a
          claim for damages and/or be a criminal offense.
        </div>
        <div className="black">
          From time to time our website may also include links to other
          websites. These links are provided for your convenience to provide
          further information.
        </div>
        <div className="terms-p black">
          You may not create a link to our website from another website or
          document without DFT Alumni Family’s prior written consent.
        </div>
        <div className="black">
          Any dispute arising out of use of our website and/or purchase with us
          and/or any engagement with us is subject to the laws of India .
        </div>
        <div className="terms-p black">
          We, shall be under no liability whatsoever in respect of any loss or
          damage arising directly or indirectly out of the decline of
          authorization for any Transaction, on Account of the Cardholder having
          exceeded the preset limit mutually agreed by us with our acquiring
          bank from time to time
        </div>
        <div className="disclaimer">
          <span className="semi-bold">Disclaimer</span>
          <div>
            The above content is created at DFT Alumni Family's sole discretion.
            Razorpay shall not be liable for any content provided here and shall
            not be responsible for any claims and liability that may arise due
            to merchant’s non-adherence to it.
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Terms;
