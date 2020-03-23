'use strict'; //The "use strict" directive switches the engine to the "modern" mode, chaning the behavior of some built-in features

// Get Access to the DOM

// let a = 1;
// let b = 1;
// let temp= 1;
// for (let i = 0; i<= 500; i++) {
//     temp = b;
//     b = a + b;a = temp;
// }

// console.log('Anwser is: + b');

// const result = document.getElementById('result')
// let approval = 'Not Approved!';

// function getApproval() {
//     setTimeout(() => {
//         approval = 'Approved'
//     }, 500);
// }

// getApproval();
// result.textContent = approval;

//not working
// const result = document.getElementById('result')

// let approval = 'Not Approved!';

// function getApproval(callback) {
//     setTimeout(() => {
//         approval = 'Approved';
//         callback()
//     }, 20);
// }

// getApproval(()=> {
//     result.textContent = approval; 
// });
// result.textContent = approval;


// // Get Access to the DOM
// const result = document.getElementById('result')

// let approval = 'Not Approved!';

// function getApproval() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             resolve('Approved');
//         }, 1000);
//    });
// }

// getApproval().then( //call our function
//     (resolvedApproval) => {
//     result.textContent = resolvedApproval; 
// });
// result.textContent = approval;


// Get Access to the DOM

const result = document.getElementById('result')

let approval = 'Not Approved!';


function getApproval() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {

        const error = false;

        if(!error){
            resolve('Approved');
        }else {
            reject('Error: Something went wrong')
        }
            
        }, 1000);
   });
}

getApproval().then( //call our function
    (resolvedApproval) => {
    result.textContent = resolvedApproval; 
});

// getApproval().then( //call our function
//     (resolvedApproval) => {
//     result.textContent = resolvedApproval; 
// });


getApproval().catch(
    err => console.log(err)
);
result.textContent = approval;
