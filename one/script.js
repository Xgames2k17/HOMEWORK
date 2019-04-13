let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let app1 = prompt("Введите обязательную статью расходов в этом месяце"),
    app2 = prompt("Во сколько обойдется?"),
    app3 = prompt("Введите обязательную статью расходов в этом месяце"),
    app4 = prompt("Во сколько обойдется?");

appData.expenses.app1 = app2;
appData.expenses.app3 = app4;

alert(appData/30);