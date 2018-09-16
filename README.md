# A simple Twilio service
A simple service providing Twilio SMS messaging.

❗️ You need a valid [Twilio](https://www.twilio.com/) account to configure this step and send messages via twilio service API. See the [Twilio SMS introduction page](https://www.twilio.com/sms) for more details. ❗️

❗️ For simplification the service does not require authentication to send messages. ❗️

## 🛠 Setup

Clone the service:

```
git clone https://github.com/rasmuslelumees/twilio-service.git
```
Go to the service directory and install the service dependencies:

```
cd twilio-service
yarn install
```

Create the environment file:

```
touch .env
```

Fill the environment file with the required variables. A sample file content is provided below:
```
PORT=3020
AUTH_SECRET=your_secret
TWILIO_IS_ENABLED=true
TWILIO_ACCOUNT_SID=AC242...
TWILIO_AUTH_TOKEN=7cb4ae...
TWILIO_SENDER=+372...
```

## 🦄 Run

Run the service by simply executing:
```
yarn start
```
