export default {
    setNameAndAge(dataArray: any[]): void {
        dataArray.forEach(item => {
            item.label = `${item.name}-${item.age}`;
        });
    },

    setLabel(dataArray: any[], label, key1, key2): void {
        dataArray.forEach(item => {
            item[label] = `${item[key1]}-${item[key2]}`;
        });
    },
}
