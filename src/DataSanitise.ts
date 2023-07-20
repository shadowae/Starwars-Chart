import DemoData from "./DemoData";

const DataSanitise = DemoData.filter((item) => {
    // do not include items with no numerical average height data

    console.log(parseInt(item.average_height));
    if (!isNaN(parseInt(item.average_height))) {
        return true;
    }
})

export  default  DataSanitise;
