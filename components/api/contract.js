import sgMail from "@sendgrid/mail";

export const requestResetPassword = async (args) => {
  // 5. Send link for set password to user email
  sgMail.setApiKey('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');
  console.log(sgMail)
  

  const message = {
    from: "ttnrsorawxunyyjdcs@awdrt.com",
    to: "merculies@outlook.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(message)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log("error");
      // console.log(error.response.body.errors[0].message)
    });
};
