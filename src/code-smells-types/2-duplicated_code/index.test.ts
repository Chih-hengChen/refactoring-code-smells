import Utils from "./Utils";
import { setNameAndAddress, setNameAndAge } from "./index.before";

const mockData: any = [
    {
        name: 'Eric',
        age: 30,
        address: 'Beijing'
    },
    {
        name: 'Tom',
        age: 27,
        address: 'Silicon Valley'
    },
    {
        name: 'Ben',
        age: 43,
        address: 'Shanghai'
    },
]

describe('setNameAndAge', () => {
    it('setNameAndAge should same result', () => {
        const dataForUtils = [...mockData];
        const copyData = [...mockData];
        setNameAndAge(copyData);
        Utils.setNameAndAge(dataForUtils);

        for (let i = 0; i < mockData.length; i++) {
            expect(copyData[i].label).toEqual(dataForUtils[i].label);
        }
    });
});


describe('setLabel', () => {
    it('setNameAndAge', () => {
        const dataForUtils = [...mockData];
        const copyData = [...mockData];
        setNameAndAge(copyData);
        Utils.setLabel(dataForUtils, 'label', 'name', 'age');

        for (let i = 0; i < mockData.length; i++) {
            expect(copyData[i].label).toEqual(dataForUtils[i].label);
        }
    });

    it('setNameAndAddress', () => {
        const dataForUtils = [...mockData];
        const copyData = [...mockData];
        setNameAndAddress(copyData);
        Utils.setLabel(dataForUtils, 'label', 'name', 'address');

        for (let i = 0; i < mockData.length; i++) {
            expect(copyData[i].label).toEqual(dataForUtils[i].label);
        }
    });
})



Utils.setLabel([], 'label', 'name', 'age');
Utils.setLabel([], 'label', 'name', 'address');
