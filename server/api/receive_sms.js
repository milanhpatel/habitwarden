const router = require('express').Router()
// const {User} = require('../db/models')
const axios = require('axios')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const client = require('twilio')(
  process.env.twilioSid,
  process.env.twilioAuthToken
)
const {User} = require('../db/models')
const {getHabits} = require('./habits')

const twilioPhone = process.env.twilionumber
const phone = '+17326158815'
module.exports = router

const sendMessage = (phone, body) => {
  client.messages
    .create({
      body: body,
      from: twilioPhone,
      to: phone
    })
    .then(message => console.log('TWILIO MSG ID: ', message.sid))
}

const findUserByPhone = async phone => {
  try {
    const findUser = await User.findOne({
      where: {phone: phone}
    })

    return null || findUser
  } catch (err) {
    throw new Error(err)
  }
}

const findUserByUsername = async userName => {
  try {
    const findUser = await User.findOne({
      where: {username: userName}
    })

    if (!findUser) return null
    else {
      return {
        userName: findUser.dataValues.username,
        number: findUser.dataValues.phone,
        userId: findUser.dataValues.id,
        balance: findUser.dataValues.balance
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}

router.post('/', async (req, res, next) => {
  try {
    sendMessage(phone, 'yep it is sending')
  } catch (err) {
    next(err)
  }
})
