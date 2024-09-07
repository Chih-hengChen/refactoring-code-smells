function multipleNumber(x: number, y: number): number {
    return x * y;
}

function countByKey(sourceArr: any[], key: string) {
    let cnt = 0;
    sourceArr.forEach(source => {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            cnt++;
        }
    });
    return cnt;
}

export {
    multipleNumber,
    countByKey
};