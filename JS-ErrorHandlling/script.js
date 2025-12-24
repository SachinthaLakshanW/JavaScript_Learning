try{
    const dividend= Number(window.prompt("Enter the dividend"));
    const divsor = Number(window.prompt("Enter the divisor"));

    if(divsor==0){
        throw new Error("You can not divide by 0");
    }
    if(isNaN(dividend)||isNaN(divsor)){
        throw new Error("This is not a number")
    }
    const result = dividend/divsor;
    console.log(result);
}
catch(error) {
    console.error(error);
}

console.log("You have reach the end!")
