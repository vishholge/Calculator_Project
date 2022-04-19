var displayArea = document.getElementById("display");
 

function isOperator(buttonText){
    if(buttonText == '+' || buttonText == "-" || buttonText == '*' || buttonText == '/' || buttonText =='%'){
        return true;
    }
    return false;
}

function buttonclick(buttonText){
    if(displayArea.innerText.length >23){
        displayArea.innerText ='0';
        return;
    }
    if(buttonText === 'clr'){
        displayArea.innerText  = '0';
        return;
    }
    if(buttonText === 'del'){
        displayArea.innerText = displayArea.innerText.slice(0,-1);
        return;
    } 
    if(buttonText === '='){
        try{
            displayArea.innerText = eval(displayArea.innerText);

        }
        catch(error){
            displayArea.innerText = '0';
        }
        return;

    }
    if(displayArea.innerText === '0'){
        if( buttonText == '.' || isOperator(buttonText)){
            displayArea.innerText  = displayArea.innerText + buttonText;
        }
        else{
            displayArea.innerText = buttonText;
        }
        
        
    }
    else{
        if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(buttonText)){

        } 
        else{
             
            displayArea.innerText = displayArea.innerText + buttonText
        }
        

        
        
    }
}
