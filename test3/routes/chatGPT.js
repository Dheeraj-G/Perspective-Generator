const express = require("express");
const { isValidRequest, createMessage, postChatGPTMessage, addMessageToConversation } = require("../utils/chatGPTUtil");
const { USER_TYPES } = require("../constants/chatGPTRoles");


const router = express.Router();

router.post("/", async (req, res) => {

    if(!isValidRequest(req.body)){
        return res.status(400).json({ error: "Invalid request" });
    }

    const { message, context, conversation = [] } = req.body;

    const contextMessage = createMessage(context, USER_TYPESES.SYSTEM);

    addMessageToConversation(message, conversation, USER_TYPES.USER);

     console.log("Generating response for: \n", message);
     const chatGPTResponse = await postChatGPTMessage(
        contextMessage,  
        conversation
     );
    
     if(!chatGPTResponse){
        return res.status(500).json({error: "Error with chatGPT"});
     }

     const{content} = chatGPTResponse;
     addMessageToConversation(content, conversation, USER_TYPES.ASSISTANT);
     console.log("Updated conversation:\n",conversation);
     return res.status(200).json({message:conversation});


});

module.exports = router;
