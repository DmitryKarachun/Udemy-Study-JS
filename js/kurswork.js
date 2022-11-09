const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return  data.filter(item => item.amount >=0)
  .reduce((sum, num) => sum + num.amount, 0);
  };

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
if (data.some(num => num.amount < 0 )) {
  return data.reduce((sum, num) => sum + num.amount, 0);
} else return getPositiveIncomeAmount(data)
};

console.log(getTotalIncomeAmount(funds));