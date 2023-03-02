
require('dotenv').config()

console.log(process.env.VERIFY_TOKEN)

class WebhookController {
    getWebhook(req, res) {
        // Parse the query params
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];
        let VERIFY_TOKEN = process.env.VERIFY_TOKEN

        // Check if a token and mode is in the query string of the request
        if (mode && token) {
            // Check the mode and token sent is correct
            if (mode === "subscribe" && token === VERIFY_TOKEN) {
                // Respond with the challenge token from the request
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                // Respond with '403 Forbidden' if verify tokens do not match
                res.sendStatus(403);
            }
        }
    }
    postWebhook(req, res) {
        let body = req.body;

        console.log(`\u{1F7EA} Received webhook:`);
        console.dir(body, { depth: null });

        // Send a 200 OK response if this is a page webhook

        if (body.object === "page") {
            // Returns a '200 OK' response to all requests
            res.status(200).send("EVENT_RECEIVED");

            // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.

        } else {
            // Return a '404 Not Found' if event is not from a page subscription
            res.sendStatus(404);
        }
    }
    // Handles messages events
    handleMessage(sender_psid, received_message) {

    }

    // Handles messaging_postbacks events
    handlePostback(sender_psid, received_postback) {

    }

    // Sends response messages via the Send API
    callSendAPI(sender_psid, response) {

    }
}

module.exports = new WebhookController;