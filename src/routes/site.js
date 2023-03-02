var express = require('express')
var router = express.Router()

const siteController = require('../app/controllers/siteController')
const webhookController = require('../app/controllers/WebhookController')

router.get('/webhook',webhookController.getWebhook)
router.post('/webhook',webhookController.postWebhook)

router.get('/search',siteController.search)
router.get('/',siteController.index)

module.exports = router