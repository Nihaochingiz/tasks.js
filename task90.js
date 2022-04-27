/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

*/



//Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

function unluckyDays(year){
    const namesWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const fridays13 = months.map(month => {
      const date = new Date(year, month - 1, 1)
      let count = 0
      while (date.getMonth() === month - 1) {
        const day = `${date.getDate()}-${namesWeek[date.getDay()]}`
        if (day === '13-fri') 
        count++
        date.setDate(date.getDate() + 1)
      }
      return count
    })
    return fridays13.reduce((total, friday) => total + friday, 0)
  }