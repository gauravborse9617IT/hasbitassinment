//question1
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

//quetion2
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Function</title>
</head>
<body>
    <h1>Calculator</h1>
    <p id="result"></p>

    <script>
        function calculate(num1, num2, operation) {
            let result;
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'Error: Division by zero';
                    }
                    break;
                default:
                    result = 'Error: Invalid operation';
            }
            return result;
        }

       
        const num1 = 20;
        const num2 = 4;
        const operation = 'divide'; 
        
        const result = calculate(num1, num2, operation);
        document.getElementById('result').textContent = `Result: ${result}`;
    </script>
</body>
</html>
//

//question3
{

    let taxAmount = 0;
    
    switch (true) {
        case (salary > 1500000):
            taxAmount = (salary - 1500000) * 0.3 + (1500000 - 1000000) * 0.2 + (1000000 - 500000) * 0.1;
            break;
        case (salary > 1000000):
            taxAmount = (salary - 1000000) * 0.2 + (1000000 - 500000) * 0.1;
            break;
        case (salary > 500000):
            taxAmount = (salary - 500000) * 0.1;
            break;
        case (salary > 0):
            taxAmount = 0;
            break;
        default:
            taxAmount = 0;
    }

    return taxAmount;
}



//question4
{
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    
    let sum = 0;

    
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = parseInt(str1.charAt(str1.length - 1 - i)) || 0; 
        let digit2 = parseInt(str2.charAt(str2.length - 1 - i)) || 0; 
        
        sum += digit1 * digit2;
    }

    return sum;
}