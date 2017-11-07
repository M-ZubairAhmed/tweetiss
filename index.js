const Twitter = require('twitter')

var twitterBot = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

module.exports = robot => {
  robot.on('issues.opened', async context => {
    const issueTitle = await context.payload.issue.title
    const issueUrl = await context.payload.issue.html_url
    const issueRepo = await context.payload.repository.name
    console.log(
      'New issue opened on',
      new Date().toUTCString(),
      ' Title:',
      issueTitle,
      'Description',
      issueUrl
    )

    const labels = context.payload.issue.labels
    let label = ''
    if (labels.length !== 0) {
      label = '#' + labels[0].name
    }

    console.log(context.payload.issue.labels)
    const tweet = 'contribute to ' + issueRepo + ' ' + issueUrl + ' ' + label
    await twitterBot
      .post('statuses/update', { status: tweet })
      .then(function (tweet) {
        console.log(
          'Tweeted by ',
          tweet.user.name,
          ' on ',
          tweet.created_at,
          'Content ',
          tweet.text
        )
      })
      .catch(function (error) {
        throw error
      })

    return 0
  })
}
