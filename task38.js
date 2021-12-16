const text = 'I never look back';
const makeItFunny = (str, n) => {
    let i = 0;//шаги в цикле
    let result = '';//куда засовываем инфу
    while (i < str.length) {//просчитываем строку слева направо от начала до конца
      const current = str[i];//задаем единичную букву, но она уже будет новой
      if ((i + 1) % n === 0) {
        result = `${result}${current.toUpperCase()}`;
      } else {
        result = `${result}${current}`;
      }
      i++;
    }
  
    return result;
  };

  console.log(makeItFunny(text, 3));