
/*
Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

Вот так должен работать наш класс:

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.



Геттеры и сеттеры
 Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
*/



class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        let salary = 0;
        salary = this.rate * this.days
        return salary;
    }

    get getName() {
        return `${workerLeonard.name} , ${workerSheldon.name}`;
    }



   set setName(value) {
      const parts =  value.split(" ");
      this.name = parts[0]
      this.lastName = parts[1]
   }


}



 let workerSheldon = new Worker("Sheldon", "Cooper", 8, 25)
 const workerLeonard = new Worker("Leonard", "Hofstadter", 6, 18)

 workerLeonard.setName = "рАДЖ кУТРАПАЛИ";


 console.log(workerSheldon.name)
 console.log(workerSheldon.name + " " +  workerSheldon.surname)
 console.log(workerSheldon.rate)

 console.log(workerSheldon.getSalary())

 console.log(workerLeonard.getSalary())



console.log(workerSheldon.getName);
console.log(workerSheldon.getDays);
console.log(workerSheldon.getSurname);
console.log(workerSheldon.getRate);


console.log(workerSheldon.setRate) 


console.log(workerSheldon.getName);

console.log(workerLeonard)
