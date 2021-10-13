class Computer{
    constructor(ran, cpu, storage){
        this.ran=ran;
        this.cpu=cpu;
        this.storage=storage
    }

     runProgram(name){
log.info("Running "+name)

    }

}

class Laptop extends Computer{
    constructor(ran, cpu, storage,battery){
        super(ran, cpu, storage)
        this.battery=battery;
    }
    carryArround(){
        console.log ("carrying laptop:  cpu" + cpu
         +" ram: " + ram + " storage: " + storage + 
         " battery: " + battery)
    }
}