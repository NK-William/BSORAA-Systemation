import React from "react";
import "./privacyPolicyContent.css";

const PrivacyPolicyContent = () => {
  return (
    <div className="privacyPolicyContent__container">
      <h4>Effective Date: May 20, 2023</h4>
      <p>
        This Privacy Policy outlines how BSORAA Systemation collects, uses,
        maintains, and discloses information collected from users of our
        website. We are committed to protecting your privacy and ensuring the
        security of the information you provide to us. By accessing and using
        our Website, you consent to the practices described in this Privacy
        Policy.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect personal and non-personal information from users in
        various ways, including but not limited to:
      </p>
      <div className="privacyPolicyContent__paragraph-divider" />
      <p>
        1. Personal Information: When you visit our Website, request
        information, or interact with our services, we may collect personal
        information that can identify you, such as your name, email address,
        phone number, and mailing address. We collect this information only when
        voluntarily submitted by you.
      </p>
      <div className="privacyPolicyContent__paragraph-divider" />
      <p>
        2. Non-Personal Information: We may also collect non-personal
        information about users whenever they interact with our Website. This
        may include technical information such as your browser type, IP address,
        operating system, and the pages you visit on our Website.
      </p>
      <h2>Use of Collected Information</h2>
      <p>We may use the collected information for the following purposes:</p>
      <div className="privacyPolicyContent__paragraph-divider" />
      <p>
        1. To Improve User Experience: We may use the information to personalize
        user experience, respond to user inquiries, and provide support. The
        information helps us understand your needs and preferences, enabling us
        to deliver a better experience on our Website.
      </p>
      <div className="privacyPolicyContent__paragraph-divider" />
      <p>
        2. To Process Transactions: If you engage in any transactions on our
        Website, we may use the provided information to process payments,
        deliver products or services, and communicate with you about the
        transaction.
      </p>
      <div className="privacyPolicyContent__paragraph-divider" />
      <p>
        3. To Send Periodic Emails: We may use your email address to send you
        information, updates, and promotional materials related to our products
        and services. You can choose to opt-out of receiving such emails at any
        time by following the instructions provided in the email.
      </p>
      <h2>Protection of Information</h2>
      <p>
        We adopt appropriate data collection, storage, and processing practices,
        as well as security measures, to protect against unauthorized access,
        alteration, disclosure, or destruction of your personal information,
        username, password, transaction information, and data stored on our
        Website.
      </p>
      <h2>Sharing of Information</h2>
      <p>
        We do not sell, trade, or rent users' personal identification
        information to others. We may share generic aggregated demographic
        information that does not identify any individual with our business
        partners, trusted affiliates, and advertisers for the purposes outlined
        above.
      </p>
      <h2>Third-Party Websites</h2>
      <p>
        Our Website may contain links to third-party websites that are not
        operated by us. We are not responsible for the privacy practices or the
        content of such external websites. We encourage users to review the
        privacy policies of these websites before providing any personal
        information.
      </p>
      <h2>Compliance with Laws</h2>
      <p>
        We will comply with all applicable laws and regulations regarding the
        collection, use, and disclosure of personal information.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We reserve the right to update or revise this Privacy Policy at any
        time. We will notify you of any changes by updating the "Effective Date"
        at the top of this Privacy Policy. It is your responsibility to review
        this Privacy Policy periodically for any updates.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy or
        the practices of our Website, please contact us at{" "}
        <a href="mailto:info@bsoraasystemation.co.za ">
          {" "}
          info@bsoraasystemation.co.za
        </a>
        .
      </p>
      <div className="privacyPolicyContent__paragraph-divider" />
      <p>
        By using our Website, you signify your acceptance of this Privacy
        Policy. If you do not agree to this Privacy Policy, please do not use
        our Website.
      </p>
      <div className="privacyPolicyContent__space-end" />
    </div>
  );
};

export default PrivacyPolicyContent;
