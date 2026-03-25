function show(){
    const row = Number(valOne.value);
    const column = Number(valTwo.value); 
    if (row == '' || column == '' || row < 0 || column < 0){
        alert('Kindly fill in the blank space')
    }
    else{
        let output = "<table>";
        for(b = 1; b <= row; b++){
            output += "<tr>";
            for(a = 1; a<= column; a++){
                if (calculation.value === '*'){
                    let multiply = a * b;
                    output += `<td>${a} x ${b} = ${multiply}</td>`
                }
                else if (calculation.value === '+'){
                    let add = a + b;
                    output += `<td>${a} + ${b} = ${add}</td>`
                }
                else if (calculation.value === '-'){
                    let subtract = a - b;
                    output += `<td>${a} - ${b} = ${subtract}</td>`
                }
                else if (calculation.value === '/'){
                    let divide = a / b;
                    output += `<td>${a} / ${b} = ${divide}</td>`
                }
            }
            output += "</tr>";
        }
        output += "<table>";
        tableOutput.innerHTML = output
    }
}