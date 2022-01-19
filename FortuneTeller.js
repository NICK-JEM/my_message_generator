//program generates a random fortune from array of strings

//msgArr contains 8 message strings
const msgArr = ["You'll find love on flag day", "Teal is your lucky colour", "Don't worry about money today", "Keep your plans secret", "Stick with your wife", "You will lose everything", "Stop doing that thing. Yes that.", "Your pp small. Focus on foreplay"];

//rndGen generates random number between 0 and 8
const rndGen = Math.floor(Math.random()*8);

//test log for rndGen
//sconsole.log(rndGen);

//function takes rndGen and outputs one string from msgArr
const message = (msgArr, rndGen) => {
    let msgOut = ""; 
    switch (rndGen) {
        case 0:
            msgOut = msgArr[0];
            
            break;
        case 1:
            msgOut = msgArr[1];
            
            break;
        case 2:
            msgOut = msgArr[2];
            
            break; 
        case 3:
            msgOut = msgArr[3];
            
            break; 
        case 4:
            msgOut = msgArr[4];
            
            break;
        case 5:
            msgOut = msgArr[5];
            
            break;  
        case 6:
            msgOut = msgArr[6];
            
            break;    
        case 7:
            msgOut = msgArr[7];
            
            break;
            
        default:
            msgOut = "ERROR DETECTED...You are fucked."
            break;
    }
return msgOut
};

//test log for message function
console.log(message(msgArr,rndGen));
