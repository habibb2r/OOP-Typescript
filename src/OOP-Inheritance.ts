{

class User {
    name: string;
    age: number;
    role: 'admin' | 'moderator' | 'guest';
    email: string;


    constructor(name: string, age: number, role: 'admin' | 'moderator' | 'guest', email: string) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.email = email;
    }

    getUserData(){
        console.log(`User Data : Name: ${this.name}, Age: ${this.age}, Role: ${this.role}, Email: ${this.email}`)
    }

}

class Admin extends User {
    totalUser: number;
    generateRevenue: string;
    constructor(name: string, age: number, role: 'admin' | 'moderator' | 'guest', email: string, totalUser: number, generateRevenue: string) {
        super(name, age, role, email);
        this.totalUser = totalUser;
        this.generateRevenue = generateRevenue;
    
}
    getAdminData(){
        console.log(`Admin Data : Total Users: ${this.totalUser}, Generate Revenue: ${this.generateRevenue}`)
    }
}


class Moderator extends User {
    manageUser: number;
    manageItems: number;
    constructor(name: string, age: number, role: 'admin' | 'moderator' | 'guest', email: string, manageUser: number, manageItems: number) {
        super(name, age , role , email );
       this.manageUser = manageUser;
       this.manageItems = manageItems;
    
}
    getModeratorData(){
        console.log(`Moderator Data : Manage Users: ${this.manageUser}, Manage Items: ${this.manageItems}`)
    }
}



const user = new User("Habib", 25, 'guest', 'habibhk127@gmail.com');
user.getUserData()

const admin = new Admin("Habib", 25, 'admin', 'habibhk127@gmail.com', 100, '10cr');
admin.getUserData()
admin.getAdminData()

}