const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey("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")

  const { email, message } = req.body

  const content = {
    to: "merculies@outlook.com",
    from: "Contract@merculies.club",
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}