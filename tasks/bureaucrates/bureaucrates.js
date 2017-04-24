/**
 * Created by sergeydaub on 17/04/2017.
 */

const bureaucrates = {
    1: {
        dependencies: [2]
    },

    2: {
        dependencies: [3, 4]
    },
    3: {},

    4: {}
};

function getInquiry(bureaucrateNumber) {
    let bn = bureaucrateNumber;
    // const dep = bureaucrates[bureaucrateNumber];
    let path = new Set();
    path.add(bn);
    while (1) {
        let dep;

        if (dep = bureaucrates[bn].dependencies && dep.length > 0) {
            dep.forEach(d => path.push(d));
        }
    }

}

//1 ->  [3,4,2,1]