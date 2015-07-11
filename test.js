function f(){
    console.log('1');
}
(function(){
    if(true){
        function f(){
            console.log('2');
        }
    }
    f();
}());
