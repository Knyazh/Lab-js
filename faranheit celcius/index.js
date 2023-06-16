let faranheithOrCelcius = prompt("1-Faranheith to Celcius \n 2-Celcius to faranheith")
let faranheith;
let celcius;




    if(faranheithOrCelcius==="1"){
        let faranheith=prompt("Faranhetih daxil edin:");
    celcius= (faranheith-32)*5/9
    alert(`${faranheith}-Faranheith = ${celcius}- Celcius`)
    }
    else if(faranheithOrCelcius==="2"){
        let celcius=prompt("Celcius daxil edin:");
        faranheith=celcius*9/5+32;
        alert(`${celcius}-Celcius = ${faranheith}-Faranheith`)
    }
    else{
        alert("Please enter correct nuber")
    }
