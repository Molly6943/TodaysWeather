
function formatDate(date: Date) {  
  let hours = date.getHours();  
  const minutes = date.getMinutes();  
  const amPm = hours >= 12 ? 'PM' : 'AM'; 
  hours = hours % 12;  
  hours = hours ? hours : 12; // the hour '0' should be '12' 

  const convertedMinutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();  
  const strTime = hours.toString() + ':' + convertedMinutes + ' ' + amPm;  
  const day = ("0" + date.getDate()).slice(-2);  
  const month = ("0" + (date.getMonth() + 1)).slice(-2);  
  const year = date.getFullYear();  
  return day + "-" + month + "-" + year + " " + strTime;
}

export {
  formatDate
}