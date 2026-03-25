const amthal= require('./data/index.json');

const amthalRandom = () => amthal[Math.floor(Math.random() * amthal.length)];

const amthalTen= ()=>{
    let set= new Set();
    while(set.size < 10) {
        let index= Math.floor(Math.random() * amthal.length);
        if(!set.has(index)) {
            set.add(index);
        }
    }
    return [...set].map(index=> amthal[index]);
}

module.exports= {amthalRandom, amthalTen};
