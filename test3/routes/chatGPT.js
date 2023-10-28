const express = require("express");
const { isValidRequest } = require("../utils/chatGPTUtil");


const router = express.Router();

router.post("/", async (req, res) => {

    if(!isValidRequest(req.body)){
        return res.status(400).json({ error: "Invalid request" });
    }

    const { message, context, conversation = [] } = req.body;

    const contextMessaeg = createMessaeg(context, SUE_TYPES.SYSTEM);

    addMessageToConversation(message, conversation, USER_TYPES.USER);

     console.log("Generating response for: \n", message);
     const chatGPTResponse = await postChatCPTMessage(
        contextMessage,
        conversation
     );

     

})

module.exports = router;
