{

    // type guard
    const add = (param1: string | number, param2: string | number): string | number =>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
        }
        else{
            return param1.toString() + param2.toString()
        }
    }
    console.log(add(5, "3"))


    //in Guard


    type NormalUser = {
        name: string,
        age: number,
        email: string
    }

    type AdminUser = {
        name: string,
        age: number,
        email: string,
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) =>{
        if('role' in user){
            console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Role: ${user.role}`)
        }else{
            console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`)
        }
    }

    getUser({name: 'Habib', age: 25, email: 'habibhk127@gmail', role: 'admin'})
    getUser({name: 'Habib', age: 25, email: 'habibhk127@gmail'})

}