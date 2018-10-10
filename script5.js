function middle()

{
var A = parseInt(document.getElementById('A').value),


B = parseInt(document.getElementById('B').value),
 i, j, Nums = [];

			
		
for (i = A; i <= B; i++)
 
		
{
			

for (j = 0; j < i; j++) Nums.push(i);
		

}
		

console.log(Nums);
		
		

document.getElementById('result').innerHTML = Nums.join(", ");

}

