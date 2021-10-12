class CheckingAccount extends Account{
    constructor(number,overDraft){
        super(number);
        this._overDraft=overDraft;
    }
    getOverDraft(){
        return this._overDraft;
    }
    setOverDraft(overDraft){
        this._overDraft=overDraft;
    }
    withdraw(amount){
        if(amount<=this.getBalance())super.withdraw(amount);
        else{
            if(this._overDraft<amount-this.getBalance())throw new Error("Insufficient amount");
            else{
                this._balance=this._balance-amount;
            }
        }
    }
    endOfMonth(){
        if(this.getBalance()<0){
            return `low balance Warning  ${this.toString()}`; 
        }
        return toString();
    }
    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance+": overDraft "+this._overDraft;
    }
}