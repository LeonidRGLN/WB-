interface IData {
    dt: string;
    quantity: number;
    age: number | null;
    temp: {
        temperature: string;
        city: string;
        optional?: boolean;
    }
}

interface IGetUniqueSetByDate  {
    dt: string;
}

interface IGetMapByDate {
    dt: Omit<IData, 'dt'>;
    // dt: {
    //     quantity: number;
    //     age: number | null;
    //     temp: {
    //         temperature: string;
    //         city: string;
    //         optional?: boolean;
    //     }
    // }
}

const data: IData[] = [
    {
        "dt": "01-01-2021",
        "quantity": 100,
        "age": null,
        "temp": {
            "temperature": "100 degrees",
            "city": "Norway"
        }
    },
    {
        "dt": "02-01-2021",
        "quantity": 150,
        "age": 23,
        "temp": {
            "temperature": "103 degrees",
            "city": "Egypt"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Kypris"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Holland"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    }
];

// ожидаю получить от тебя умение работать с мапой, и сетами, умение описывать интерфейсы. -- done
// - получить Сет уникальных дат на выходе. -- done
// - мапа значений для даты, где ключ это дата, а значение это массив данных за это число.
// - Написать интерфейс данного запроса, используя обязательные и не обязательные поля, могут быть вложенные в интерфейсы - интерфейсы. --done
//
//     в формате .ts

const getUniqueSetByDate = (arr: IData[]): Set<IGetUniqueSetByDate> => {
    // console.log('reduce', arr.reduce((acc, curr) => [...acc, curr.dt], []));
    return new Set(arr.reduce((acc, curr) => [...acc, curr.dt], [ ]))
};

const getMapByDate = (arr: IData[]): Map<string, Omit<IData, 'dt'>> => {
    const result = new Map();
    arr.map(item => {
        const withoutDT = Object.keys(item).reduce((acc, curr) => {
            if (curr !== 'dt') acc[curr] = item[curr];

            return acc;
        }, { });

        result.set(item.dt, [...(result.get(item.dt) ?? []), withoutDT])
    });

    return result;
}

console.log('getUniqueSetByDate', getUniqueSetByDate(data));
console.log('getMapByDate', getMapByDate(data));