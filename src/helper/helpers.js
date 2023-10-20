const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  }
  
export const formatDate = (date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }