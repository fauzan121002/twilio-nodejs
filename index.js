const twilio = require('twilio')

const accountSid = 'AC7d16389466cf0423ea7bc80eda5f1ac7',
	  authToken = '7b436017ed9ad4f4d09ff00ff76229a2'

const client = new twilio(accountSid, authToken)

client.messages.create({
	body: `
		Example Message	
	`,
	to: '+6281293287123',
	from: '+00000000000'
})
.then((message) => console.log(message))
.catch((err) => console.log(err))