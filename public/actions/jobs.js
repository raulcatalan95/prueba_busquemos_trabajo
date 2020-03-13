// PRUEBA FINAL ->

let mySelector1, mySelector2

function  mySelectors() {
    mySelector1 = document.querySelector('#location')
    mySelector2 = document.querySelector('#desc')   
    
    let selectorGroup = {
        mySelector1,
        mySelector2,
    }   
     return selectorGroup
}
 function buscar(){
    const myProm = new Promise( (respuesta, rechazo) => {

      async function proceso(){  
        const  myData = mySelectors();
        var config = {

            headers: {'Access-Control-Allow-Origin': '*', 'Content-type': 'application/json'}
        };        
        
        let myJobs = await axios.get(
           `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${myData.mySelector1}${myData.mySelector2}`,config       
        )     
         console.log(myJobs)       
        
           if(myJobs){
            myJobs.data.forEach(myElement => {
                $('#datostrabajos').append(`<ul> <li><h3>${myElement.title}</h3></li> </ul>`)
            })
            respuesta('Si se obtuvieron trabajos')
        }else{
            rechazo('No se obtuvo ningun trabajo')
        }
        
    }
    proceso();
    })
    
    myProm.then( res => console.log(res)).catch( err => console.log(err));
}




