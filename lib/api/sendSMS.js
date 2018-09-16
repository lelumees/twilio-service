'use strict';

const respond = require('./responses');
const configuration = require('../configuration');

const accountSid = configuration.twilio.accountSid;
const authToken = configuration.twilio.authToken;
const sender = configuration.twilio.sender;
const client = require('twilio')(accountSid, authToken);

module.exports = async (context) => {
    const data = context.request.body;

    if (!data.message || !data.to) {
        return respond.badRequest(context);
    }

    const message = await client.messages
        .create({
            body: data.message,
            to: data.to,
            from: sender
        });

    respond.success(context, {
        message: 'OK',
        sentMessage: message
    });
};
