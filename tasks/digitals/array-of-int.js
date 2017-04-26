const arr = [1, 7, 9];

function canRepresent(value, arr) {
    if (!arr || !arr.length) return false;

    const bitsBase = Math.pow(2, arr.length) - 1;

    for(let i = 1; i <= bitsBase; i++){
        let indexes = getAvailableIndexes(i);
        let res = check(indexes);
        if (res){
            return `${value} = ${res.join(' + ')}`;
        }
    }


    return null;

    function getAvailableIndexes(value){
        let ind = 0;
        let indexes = [];
        while(value){
            if (value % 2) indexes.push(ind);
            value >>= 1;
            ind++;
        }
        return indexes;
    }

    function check(availableIndexes){
        let v = value;
        let a = [];
        for (let i = arr.length; --i >= 0 && v;){
            if (availableIndexes.indexOf(i) === -1 ) continue;
            const d = arr[i];
            if (d > v) continue;
            a.push(d);
            v -= d;
        }
        return (v === 0)? a: null;
    }

}

export default canRepresent;

// console.log('start');
//
// let r = canRepresent(10, arr);
// console.log( r ? `можно: ${r}` : 'нельзя разложить 10');
//
// r = canRepresent(5, arr);
// console.log( r ? `можно: ${r}` : 'нельзя разложить 5');