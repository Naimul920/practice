/**********problem one*********
const heights2 = [167, 190, 120, 165, 137];

function lowestNum(min){
    let result=min[0];
    // console.log(result);
    for(const num of min){
        if(num < result){
            result = num;
        }
    }
    return result;
}

const result = lowestNum(heights2);
console.log(result);

*****/
/****************Problem solved two******
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(min){
    let result =min[0]
     for (const name of min){
        if(name.length < result.length){
            result =name;
        }
        // console.log(name.length);
     }
     return result;
}

const result = smallestName(heights2);
console.log(result);

****************/

function calculateElectronicsBudget(){
    
}
