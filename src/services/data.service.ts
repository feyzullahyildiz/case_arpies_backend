export abstract class DataService {
    static getData = () => {
        const data = [
            {
                id: 1,
                name: "adaylarla ilgili teknik bir odev hazirlamama gerekiyor",
                priority: "URGENT",
            },
            {
                id: 2,
                name: "yapilan islerle ilgili activity kayitlari olusturmam gerekiyor",
                priority: "REGULAR",
            },
            {
                id: 3,
                name: "teknik tasklari planlayacagim",
                priority: "TRIVIAL",
            },
        ];
        return data;
    };
}
