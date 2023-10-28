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
