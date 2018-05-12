'use strict'

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework')

const config = {
  logging: true
}

let userChoice
const app = new App(config)

// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
  'LAUNCH': function() {
    this.toIntent('HelloWorldIntent')
  },

  'CheckWebsiteIntent': function() {
    this.ask('Hey, can you tell the website address?')
  },
  'WebsiteNameIsIntent': function(website) {
    this.tell('Hey ' + website.value + ' is compliant')
  },
  'AmIGDPRComplaintIntent': function() {
    this.tell('Let me ask you a few questions regarding it.')
    this.ask('Do you save any data related to companies of EU?')
  },
  'QuestionTwoIntent': function()
})

module.exports.app = app
