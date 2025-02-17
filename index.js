module.exports = {
    sayHello: () => {
        return "hello";
    },
    
    add: (input, delimiters) => {
        const splitInput = input.toString().split(delimiters);
        let calculation = 0;
       
        splitInput.map(data => {
            if(data.includes('\n')){
                let trimmedData = data.replace(/\n/g, ',');
                calculation = trimmedData.toString().split(",").reduce(
                    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
                    calculation,
                );     
            }
            else{
                if(data && !isNaN(data) && typeof +data === 'number'){
                    calculation += +data
                }
            }
        })        
        return calculation;
    },
   
};