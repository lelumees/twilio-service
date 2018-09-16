'use strict';

const _ = require('lodash');

module.exports = {
    port: _.get(process.env, 'PORT', 3020),
    router: {
        prefix: '/api'
    },
    authorization: {
        secret: _.get(process.env, 'AUTH_SECRET')
    },
    twilio: {
        isEnabled: _.get(process.env, 'TWILIO_IS_ENABLED'),
        accountSid: _.get(process.env, 'TWILIO_ACCOUNT_SID'),
        authToken: _.get(process.env, 'TWILIO_AUTH_TOKEN'),
        sender: _.get(process.env, 'TWILIO_SENDER')
    }
};
