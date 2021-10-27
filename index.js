/*
BASIC SALARY CALCULATOR

personal allowance is £12,570
basic rate is 20% from £12,571 to £50,270
higher rate is 40% from £50,271 to £150,000
additional rate is 45% over £150,000

NI is 0% below £184/weekly before tax
NI is 12% if salary is > £184 but < £967 per week before tax
additional 2% if > £967/week before tax
*/


const YearlySalary = prompt("Please enter your yearly salary in the box below");

const monthsperYear = 12;

const weeksPerYear = 52;

const weeklyWorkingDays = 5;

const weeklySalary = YearlySalary/weeksPerYear;

const workingDaySalary = weeklySalary/weeklyWorkingDays;

const personalAllowance = 12570;

/*
const personalAllowanceMonthly = personalAllowance/monthsperYear;
const personalAllowanceWeekly = personalAllowance/weeksPerYear;
const personalAllowanceDaily = personalAllowanceWeekly/weeklyWorkingDays;
const basicRate = ((YearlySalary - personalAllowance) * 0.8) + personalAllowance;
const basicRateMonthly = basicRate/monthsperYear;
const basicRateWeekly = basicRate/weeksPerYear;
const basicRateDaily = basicRateWeekly/weeklyWorkingDays;
const higherRate = ((YearlySalary - 50270 - personalAllowance) * 0.6) + (basicRate * 0.8) + personalAllowance;
const higherRateMonthly = higherRate/monthsperYear;
const higherRateWeekly = higherRate/weeksPerYear;
const higherRateDaily = higherRateWeekly/weeklyWorkingDays;
const additionalRate = ((YearlySalary - 150000 - 50270 - personalAllowance) * 0.55) + (higherRate * 0.6) + (basicRate * 0.8) + personalAllowance;
const additionalRateMonthly = additionalRate/monthsperYear;
const additionalRateWeekly = additionalRate/weeksPerYear;
const additionalRateDaily = additionalRateWeekly/weeklyWorkingDays;

if (YearlySalary < 12570) {
  alert(`Your earn £${personalAllowanceMonthly.toFixed(2)} per month`);
  alert(`Your earn £${personalAllowanceWeekly.toFixed(2)} per week`);
  alert(`Your earn £${personalAllowanceDaily.toFixed(2)} per working day`);
} else if (YearlySalary > 12571 && YearlySalary < 50270) {
  alert(`Your earn £${basicRateMonthly.toFixed(2)} per month`);
  alert(`Your earn £${basicRateWeekly.toFixed(2)} per week`);
  alert(`Your earn £${basicRateDaily.toFixed(2)} per working day`);
} else if (YearlySalary > 50271 && YearlySalary < 150000) {
  alert(`Your earn £${higherRateMonthly.toFixed(2)} per month`);
  alert(`Your earn £${higherRateWeekly.toFixed(2)} per week`);
  alert(`Your earn £${higherRateDaily.toFixed(2)} per working day`);
} else {
  alert(`Your earn £${additionalRateMonthly.toFixed(2)} per month`);
  alert(`Your earn £${additionalRateWeekly.toFixed(2)} per week`);
  alert(`Your earn £${additionalRateWeekly.toFixed(2)} per working day`);
};
*/

/*
// responsibility
function salarySplit (yearlySalary) {
  const monthlySalary = (yearlySalary / monthsperYear)
  const weeklySalary = (yearlySalary / weeksPerYear)
  let userMessage = `You will get £${monthlySalary} per month`
  userMessage += `You will get £${weeklySalary.toFixed(2)} per week`
  userMessage += `You wish!! You still have to pay tax & NI`
  return userMessage;
}

alert(salarySplit(yearlySalary));
*/