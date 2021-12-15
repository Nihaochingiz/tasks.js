

const countChars=(text, dupl)=> {
    let i = 0;
    let newDupl = 0;

    while (i < text.length) {
        if(text[i].toLowerCase() === dupl.toLowerCase()) {
        newDupl += 1
    }
    i = i + 1 
    }

    return newDupl;
}

console.log(countChars('FEar cuts deeper than swords.', 'e'));



