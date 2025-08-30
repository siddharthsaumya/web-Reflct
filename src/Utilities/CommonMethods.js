export const TimeDifferenceFormat = (time) => {
const now = new Date();
  let diff = Math.floor((now - time) / 1000);
  if (diff < 5) return "just now"; 
  const units = [
    { label: "y", seconds: 31536000 },
    { label: "w", seconds: 604800 },  
    { label: "d", seconds: 86400 },  
    { label: "h", seconds: 3600 }, 
    { label: "m", seconds: 60 },
    { label: "s", seconds: 1 }
  ];
  for (const unit of units) {
    if (diff >= unit.seconds) {
      return `${Math.floor(diff / unit.seconds)}${unit.label}`;
    }
  }
};

export const ConvertUTCtoIST = (utcDate) => {
  const date = new Date(utcDate); 
  const istOffset = 330; 
  const utcOffset = date.getTimezoneOffset();
  const istTime = new Date(date.getTime() + (istOffset + utcOffset) * 60000);
  return istTime;
};