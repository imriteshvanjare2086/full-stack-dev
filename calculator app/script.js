    let display = document.querySelector(".dis");
    let buttons = document.querySelectorAll("button");

    let expression = "";

    buttons.forEach(button => {
        
        button.addEventListener("click", ()=>
        {
            let value = button.innerText;

            if(value == "AC")
            {
                expression = "";
                display.innerText = "0";
            }

            else if(value == "=")
            {
                if(expression == "1+")
                {
                    display.innerText = "NEVER SETTLE";
                    display.style.backgroundColor = "red";
                    display.style.color = "white";
                    display.style.fontSize = "30px";
                    setTimeout(function()
                    {
                        display.innerText = "0";
                        display.style.backgroundColor = "rgb(208, 208, 208)";
                        display.style.color = "black";
                        display.style.fontSize = "50px";
                        }, 3000);   
                }
                else
                {
                    expression = eval(expression).toString();
                    display.innerText = expression;
                }
            }

            else if(value == "X")
            {
                expression = expression.slice(0,-1);
                display.innerText = expression;
            }

            else
            {
                expression += value;
                display.innerText = expression;
            }
        })
    });