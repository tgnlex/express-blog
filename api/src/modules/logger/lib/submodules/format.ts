type LogData = string | number;
function format(data: Array<LogData>,  context = {}) {
  let ctx = JSON.stringify(context);  
  let fmt: string;
    if (data.length > 1) {
      let arr = [data];
      fmt = arr.map(val => JSON.stringify(val)).join('');
      return `${fmt} | Context: ${ctx}`;
    }  
    return `${data} | Context: ${ctx}`;
};

export default format;

