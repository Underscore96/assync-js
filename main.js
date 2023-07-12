
// function superFunzione(){
//     console.log('sto eseguendo');
// }

// const pippo = 1;

// const pluto = 2;


// setTimeout(superFunzione, 20000);


// const paperino = pippo + pluto;

// const topolino = 'javascript'

// // console.log(topolino + paperino);


// setInterval(() => {
//     console.log('sto eseguendo il codice dentro');
    
// }, 20000);



// function gestisciRisposta(resp){
// //     //return resp.text();
// console.log('response', resp);
//    return resp.json();
// }

// function gestisciRisultatoFinale(res){
// //     //const dittoObj = JSON.parse(res);
// //     //console.log(dittoObj);
//     console.log(res);
// }



// function gestisciEmergenza(error){
//     console.log(error.message)
// }




// fetch('https://jazzfm.ro/')
// .then(gestisciRisposta)
// .then(gestisciRisultatoFinale)
// .catch(gestisciEmergenza);




fetch('https://google.com')
.then((resp) => resp.json())
.then((res) => res.abilities)
.then((ab) => console.log(ab))
.catch((error) => console.log(error.message));


