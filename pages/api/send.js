const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey("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")

  const { email, message,name,subject } = req.body

  const content = {
    to: "brinicleid@gmail.com",
    from: "Contract@merculies.club",
    subject: `New Message From - ${email} - ${subject}`,
    text: message,
    html: `<p>${name}</p><br/><p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}