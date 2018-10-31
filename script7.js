var d, m,y;
 function Fdate() {
 	 d=document.getElementById('Text').value;
	document.getElementById('Text').value="";


 	
 	return d;
 	

}
 function Fmonth() {
 	 m=(document.getElementById('Text').value);
	 document.getElementById('Text').value="";
 	
 	return m;

}
 function Fyear() {
 	 y=document.getElementById('Text').value;
	 document.getElementById('Text').value="";
	 
 	
 	return y;

}




		function formatDate() {

			
     var Day_names = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
let date = new Date( y,m,d )
  var day = date.getDay();
  var monthIndex = date.getMonth();
  var year =date.getFullYear();
 var nextYear= date.getDate()+' '+Day_names[date.getDay(date.setYear(date.getFullYear() + 1))] + ' ' + monthNames[monthIndex] + ' ' + (year+1);
 var thisYear=date.getDate()+' '+Day_names[day]+ ' ' + monthNames[monthIndex] + ' ' + year;
  return thisYear + '/' + nextYear;
}
