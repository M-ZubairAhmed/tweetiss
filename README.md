# Tweet Issue Bot

*A bot which tweets the issues which are opened on your github repository*

## Setup :zap:
###### 1. Clone repository
`$ git clone https://github.com/M-ZubairAhmed/tweet-issues.git`
`$ cd tweet-issues`

###### 2. Install dependencies
`$ npm install`


###### 3. Rename .env.example
`$ mv .env.example .env`
###### 4. Setup Github app
  - Create a [github app](https://probot.github.io/docs/development/#configure-a-github-app)
  - Enter `APP_ID`,`WEBHOOK_SECRET` in `.env`
  - Optionally a subdomain can also entered
  - Install in the github repository of choice

###### 5. Setup Twitter app
  - Create a [twitter app](https://apps.twitter.com/) on the chosen twitter account
  - Grant `Read/Write` access
  - Enter `consumer_key`,`consumer_secret`,`access_token`,`access_token_secret` in `.env`

######  6. Start app
`$ npm start`

You should have a local running app.

## Deploy :rocket:
To be able to use this bot with your account, you would need to deploy it in cloud.
We recommend Zeit. Its a great service for running Probot apps. After creating the GitHub App:

###### 1. Install the now CLI
`$ npm i -g now`

###### 2. Clone the app
`$ git clone https://github.com/M-ZubairAhmed/tweet-issues.git`

###### 3. Run now to deploy,
- Replace the `APP_ID` and `WEBHOOK_SECRET` with the values for those variables, and
- Set the path for the PRIVATE_KEY:
```bash
     $ now -e APP_ID=aaa \
         -e WEBHOOK_SECRET=bbb \
         -e PRIVATE_KEY="$(cat ~/Downloads/*.private-key.pem)"
```
###### 4. Update Webhook
- Go back to your app settings page and update the `Webhook URL` to the URL of your deployment

Your app should be up and running.

#### Permissions & Events :unlock:

- [X] Issues - access Read-only permissions
- [X] Issues - subscribe events
