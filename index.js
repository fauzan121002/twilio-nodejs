const twilio = require('twilio')

const accountSid = 'xxxxxxxxxxxx',
	  authToken = 'xxxxxxxxxxx'

const client = new twilio(accountSid, authToken)

client.messages.create({
	body: `
		Example Message	
	`,
	to: '+xxxxxxx',
	from: '+xxxxxxxx'
})
.then((message) => console.log(message))
.catch((err) => console.log(err))
