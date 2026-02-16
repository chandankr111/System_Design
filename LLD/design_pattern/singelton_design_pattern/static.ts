class counter{
    static count : number =0 ;

    static countincrease(){
        counter.count++;
        return counter.count;
    }
}

counter.countincrease();
console.log(counter.count);

counter.countincrease();
console.log(counter.count);

counter.countincrease();
console.log(counter.count);