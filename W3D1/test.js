describe("Account",function(){
    it("Creating new account with account number 54321 Zero balance",function(){
        assert.equal(new Account("54321").getBalance(),0.0);
    });
});
describe("Deposit",function(){
   
    it("Deposite Balance must add the value to the balance",function(){
        let acc= new Account("23456");
        acc.deposit(100);
        assert.equal(acc.getBalance(),100);
    });
    it("Deposite balance, if value is negative it must throw error",function(){
        let acc=new Account("64321");
        assert.throw(()=>acc.deposit(-100), Error);
    });
});
describe("withdraw",function(){
    it("Withdraw Balance must deduct from the balance, if negative throw error",function(){
        let acc=new Account("123456");
        assert.throw(()=>acc.withdraw(-100), Error);
    });
    it("withdraw amount, throw error when trying to withdraw amount greater than balance",function(){
        let acc=new Account("123457");
        assert.throw(()=>acc.withdraw(100),Error);
    });
})

describe("SavingsAccount",function(){
    it("Add Interest on Savings account",function(){
        let acc=new SavingsAccount("123456",50);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.getBalance(),150);
    });
})
describe("CheckingAccount",function(){
    it("Allow the withdraw upto the overDraft overdraft amount",function(){
        let acc=new CheckingAccount("654321",100);
        acc.withdraw(100);
        assert.equal(-100,acc.getBalance());
    });
    it("if withdrawal is below overDraft it must throw an error",function(){
        let acc=new CheckingAccount("123456",100);
        assert.throw(()=>acc.withdraw(121),Error);
    });
    it("negative withdrawal must throw error",function(){
        let acc=new CheckingAccount("123456",100);
        assert.throw(()=>acc.withdraw(-10),Error);
    });
   
});
describe("Bank",function(){
    it("Return empity array of accounts upon creation",function(){
        let bank=new Bank();
        assert.equal(0,bank.total());
    });
    it("The bank must allow the user to cteate and close the accounts",function(){
        let bank=new Bank();
        bank.addAccount("123456");
        assert.equal(1,bank.total());
        bank.closeAccount("123456");
        assert.equal(0,bank.total());
    });
    it("It must Generate reports for the created accounts",function(){
        let bank=new Bank();
        bank.addAccount("123456");
        bank.addAccount("123457");
        bank.addAccount("123458");
        bank.addAccount("123458");
        bank.addAccount("123450");
        bank.addAccount("122345");
        assert.equal("123456\n123457\n123458\n123458\n123450\n122345",bank.accountReport());
    });
});
describe("End of month",function(){
    it("checking account with negative balance at the end of month must start with low balance Warning",function(){
        let acc=new CheckingAccount("123456",10);
        acc.withdraw(10);
        assert.equal(true,acc.endOfMonth().startsWith("low balance Warning"));
    });
    it("Normal Acounts start with nothing",function(){
        let acc=new Account("123457");
        assert.equal("",acc.endOfMonth());
    });
});
window.onload=function(){
    mocha.run();
}