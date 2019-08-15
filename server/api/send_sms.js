const router = require('express').Router()
const MessagingResponse = require('twilio').twiml.MessagingResponse

const test = () => {
  console.log(
    'test is: ',
    process.env.twilioSid,
    process.env.twilioAuthToken,
    process.env.twilionumber
  )
}

test()
const client = require('twilio')(
  process.env.twilioSid,
  process.env.twilioAuthToken
)

const twilioPhone = process.env.twilionumber
const phone = '+17326158815'
const body = 'sending SMS from send_sms.js confirmed'

client.messages
  .create({
    body: body,
    from: twilioPhone,
    to: phone
  })
  .then(message => console.log(message.sid))
