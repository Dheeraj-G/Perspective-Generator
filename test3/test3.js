const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const chatGPTRoutes = require("./routes/chatGPT.js");

app.use("/chatGPT",chatGPTRoutes);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});


/*
var userInput;
        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let userInput = document.getElementById("name").value;
            alert(userInput);
            const content = document.getElementById(divId).innerHTML;
            const printWindow = window.open('', '_blank');
            printWindow.document.write('<p>'+userInput+'</p>');
            printWindow.document.close();
            printWindow.print();
        });
*/