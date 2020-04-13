let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


let a = prompt('Введите обязательную статью расходов в этом месяц', '');
let c = prompt('Во сколько обойдется?', '');
let b = prompt('Введите обязательную статью расходов в этом месяц', '');
let d = prompt('Во сколько обойдется?', '');

appData.expenses[a] = c;
appData.expenses[b] = d;

alert(appData.budget / 30);