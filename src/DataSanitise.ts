import DemoData from "./DemoData";

const DataSanitise = DemoData.map((item) => {
    // swap out average_height parameter in item to 0 if NaN

    console.log(parseInt(item.average_height));
    if (isNaN(parseInt(item.average_height))) {
        return {...item, average_height: '0'};
    } return item;
})

export  default  DataSanitise;
