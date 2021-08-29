

function Bmi(){


    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="your Bmi is: "+ bmio;
}


function Calo(){

    
    var h=document.getElementById('hi').value;
    var w=document.getElementById('we').value;
    var age=document.getElementById('age').value;
    var calo= (10 * w/1+  6.25 * h/1 - 5 * age/1 + 5);
    var calom= calo * 1.4;
  
    document.getElementById("resultcal").innerHTML="your Daily Calories intake: "+ calom;
    const protiens =calom*0.12;
    const carbs =calom*0.60;
    const fate =calom*0.27;
    var fats=(fate.toFixed(2));


        let data2= [protiens,fats,carbs];
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx,{

    type:'doughnut',
    data: {

        labels: [' Protiens', 'Fats', 'Carbs'],
        datasets : [
        {

            label:'# of votes',
            data : data2,
            backgroundColor:['#2adece', '#dd3b79', '#ff766b'],
            borderWidth:1
        }
        ]

    }

    });

}

function Clear()
{   
        document.getElementById("result").innerHTML="";
        document.getElementsByClassName('clear').value= '';
        // document.getElementById('h').value = '';

}
function Clear2()
{
        document.getElementById("resultcal").innerHTML="";
}








