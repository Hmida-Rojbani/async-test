function getData() {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
        console.log('Data is ready');
        resolve( 'wrong');
    }, 2000);
    });
    
    
}

function concat(d) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log('Data is concated');
        if(d === 'wrong')
            reject('Wrong Data');
        resolve( 'Hello '+d);
    }, 3000);
    })
    
    
}

function display(data) {
    console.log('data :',data);
}

async function exec(){
    try {
        let data = await getData();
        let cd = await concat(data);
        display(cd);
    } catch (error) {
        console.log('Error :',error);
    }
    
}

console.log('Begin');
// getData(function (data) {
//     concat(data, function(cd){
//         display(cd);
//     })
// })

// getData().then(function (data) {
//     concat(data);
// })
//console.log(getData());
// getData().then(data=> concat(data))
//         .then(cd => display(cd))
//         .catch(err => console.log('error : ',err))

exec();

console.log('End');