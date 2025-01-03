import { Data } from "../../interface/data";
function format(data: Data[],  context = {}) {
    let fmt: string;
    if (data.length > 1) {
      fmt = data.map(val => JSON.stringify(val)).join(' ');
      return `${fmt} | Context: ${context}`;
    }  
    return `${data} | Context: ${context}`;
};

export default format;

