{

class BankAccount {
    readonly accountNumber: number;
    public accountHolderName: string;
    protected accountBalance: number;

    constructor(accountNumber: number, accountHolderName: string, accountBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }

    addBalance(amount: number) {
        this.accountBalance += amount
        console.log(this.accountBalance)
    }

    getBalance() {
        return this.accountBalance
    }
}


class Student extends BankAccount{
    test(){
        this.accountBalance = 400
    }
}

const goribs = new BankAccount(102, 'Habib', 20)
goribs.addBalance(550)


}