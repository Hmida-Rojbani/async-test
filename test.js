function getData(callback) {
    setTimeout(() => {
        console.log('Data is ready');
        callback( 'GLSI-C');
    }, 2000);
    
}

function concat(d,callback) {
    setTimeout(() => {
        console.log('Data is concated');
        callback( 'Hello '+d);
    }, 3000);
    
}

function display(data) {
    console.log('data :',data);
}
console.log('Begin');
getData(function (data) {
    concat(data, function(cd){
        display(cd);
    })
})





console.log('End');