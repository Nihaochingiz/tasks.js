
//Подсчет букв Чтобы получить N-й символ или букву из строки, нужно написать "string" [N].
Возвращаемым значением будет строка, содержащая только один символ (например, "Ь").
Первый символ имеет позицию О, в результате чего по­следний находится в позиции string.
length - 1.  Другими словами, длина строки из двух символов равна 2,
а ее символы находятся в позициях О и 1.
Напишите функцию countBs,
которая принимает строку в качестве един­ственного аргумента и
 возвращает число, показывающее, сколько больших
букв ~в~ содержится в этой строке.
Затем напишите функцию countChar, которая ведет себя как countBs,
за ис­ключением того, что принимает второй аргумент, указывающий,
какие имен­но символы нужно посчитать (вместо того чтобы считать только большие буквы ~в~).
//Перепишите countBs, чтобы использовать эту новую функцию