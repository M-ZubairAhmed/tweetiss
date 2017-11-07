# Tweet Issue Bot

*A bot which tweets the issues which are opened on your github repository*

## Setup
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

## Deploy
If you would like to run your own instance of this app, see the [docs for deployment](https://probot.github.io/docs/deployment/).

This app requires these **Permissions & events** for the GitHub App:

> **TODO**: List permissions required for deployment here. See [probot/stale](https://github.com/probot/stale/blob/master/docs/deploy.md) for an example.
