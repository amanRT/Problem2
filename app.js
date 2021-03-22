function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hours >=12 ? 'pm' : 'am';
    hours = hours % 24;
    hours = hours ? hours : 24; 
   minutes = minutes < 10 ? '0'+ minutes  :minutes  ;
   var minute=minutes+45;
    second = second < 10 ? '0'+second : second;
    var seconds=second+45;
    var strTime = hours + ':' + minute + ':'+seconds +' '+ ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));