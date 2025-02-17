module.exports = {
    sayHello: () => {
        return "hello";
    },
    
    add: (input) => {
        const splitInput = input.toString().split(",");
        let calculation = 0;
       
        splitInput.map(data => {
            if(data.includes('\n')){
               
                let trimmedData = data.replace(/\n/g, ',');
                console.log(trimmedData)
                calculation = trimmedData.toString().split(",").reduce(
                    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
                    calculation,
                );     
            }
            else{
                if(data && typeof +data === 'number'){
                    calculation += +data
                }
            }
        })        
        return calculation;
    },
   
};