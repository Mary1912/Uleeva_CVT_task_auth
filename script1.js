var months = new Array(13);
  months[1]="января"; months[2]="февраля"; months[3]="марта"; months[4]="апреля"; months[5]="мая"; months[6]="июня"; months[7]="июля"; months[8]="августа"; months[9]="сентября"; months[10]="октября"; months[11]="ноября"; months[12]="декабря";

  var time = new Date();
  var thismonth = months[time.getMonth() + 1];
  var date = time.getDate();
  var thisyear = time.getYear();
  var day = time.getDay() + 1;

  if (thisyear < 2000)
      thisyear = thisyear + 1900;
  if (day == 1) DayofWeek = "Воскресенье";
  if (day == 2) DayofWeek = "Понедельник";
  if (day == 3) DayofWeek = "Вторник";
  if (day == 4) DayofWeek = "Среда";
  if (day == 5) DayofWeek = "Четверг";
  if (day == 6) DayofWeek = "Пятница";
  if (day == 7) DayofWeek = "Суббота";

setInterval(function() {
  var cd = new Date();
  var clockdat = document.getElementById("clockdat");
  clockdat.innerHTML = cd.toLocaleTimeString();
}, 1000);

document.write(date+" "+thismonth+ " "+thisyear+" "+"года"+" "+DayofWeek);


var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
var b, ua = navigator.userAgent;
for(var i=0; i < ba.length; i++){
    if( ua.indexOf(ba[i]) > -1 ){
        b = ba[i];
        break;
    }
}
if(b == "MSIE" || b == "Trident" || b == "Edge"){
    b = "Internet Explorer";

alert("Internet Explorer не поддерживает данный сайт");
}

  









