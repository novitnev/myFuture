let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяц', '');
  let b = prompt('Во сколько обойдется?', '');

  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
    console.log('done'); //проверяем вводимые условия
    appData.expenses[a] = b;
  } else {

  }

};

appData.monePerDay = appData.budget / 30; //доход на один день
alert('Ежедневный бюджет: ' + appData.monePerDay);

if (appData.monePerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.monePerDay > 100 && appData.monePerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.monePerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');
}