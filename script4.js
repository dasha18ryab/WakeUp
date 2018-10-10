function middle() {

var N = parseInt(document.getElementById('N').value);
var K = parseInt(document.getElementById('K').value);

var summ=0;
for (var i=1;i<=N;i++){

summ= summ + Math.pow(i,K);


//console.log(summ);
document.getElementById('result').innerHTML = summ;



}

}