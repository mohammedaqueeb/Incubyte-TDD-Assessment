module.exports = {
    sayHello: () => {
        return "hello";
    },
    
    add: (input) => {
        const splitInput = input.toString().split(",");
        let calculation = 0;
        console.log(splitInput)
        splitInput.map(data => {
            if(data){
                calculation += +data
            }
        })        
        return calculation;
    },
   
};