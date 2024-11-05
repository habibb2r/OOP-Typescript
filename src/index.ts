{
    const task1 : string = 'Hello World, I will complete this course successfully and become a Next level Web Developer!'
    console.log(task1)

    type User = {
        name : string;
        age: number;
        role?: 'admin' | 'user' | 'guest';
    }
    const task2 : User = {
        name: 'John Doe',
        age: 30,
        role: 'admin'
    }
    const task21 : User = {
        name: 'John Doe',
        age: 30,
    }
    console.log(task2)

    type Name = {
        firstName : string,
        lastName : string
    }
    type Address = {
        street : string,
        city : string,
        state : string,
        zipCode : string
    }

    type HairAndEyeColor = {
        hairColor: string,
        eyeColor: string
    }

    type IncomeAndExpense = {
        income: number,
        expense: number
    }

    type Hobbies = string[]
    type FamilyMembers = {
        father: string,
        mother: string,
        siblings: string[]
    }
    type Job = {
        jobTitle: string,
        company: string,
        startDate: Date,
        endDate?: Date
    }
    type Skills = string[]

    type MaritalStatus = {
        status: 'single' | 'married' | 'divorced' | 'widowed',
        spouseName?: string,
        children?: string[]
    }

    type Friends = string[]

    type Person = {
        name: Name,
        address: Address,
        hairAndEyeColor: HairAndEyeColor,
        incomeAndExpense: IncomeAndExpense,
        hobbies: Hobbies,
        familyMembers: FamilyMembers,
        job: Job,
        skills: Skills,
        maritalStatus: MaritalStatus,
        friends: Friends
    }

    const task3 : Person = {
        name: {
            firstName: 'John',
            lastName: 'Doe'
        },
        address: {
            street: '123 Main St',
            city: 'Anytown',    
            state: 'CA',
            zipCode: '12345'
        },
        hairAndEyeColor: {
            hairColor: 'brown',
            eyeColor: 'blue'
        },  
        incomeAndExpense: {
            income: 50000,
            expense: 30000
        },  
        hobbies: ['sports', 'music'],
        familyMembers: {
            father: 'John',
            mother: 'Jane',
            siblings: ['Bob', 'Alice']
        },
        job: {
            jobTitle: 'Software Engineer',
            company: 'ABC Company',
            startDate: new Date('2020-01-01'),
            endDate: new Date('2022-12-31')
        },
        skills: ['HTML', 'CSS', 'JavaScript'],  
        maritalStatus: {
            status: 'married',
            spouseName: 'Jane Doe',
            children: ['John', 'Jane']
        },  
        friends: ['Alice', 'Bob']
    }
    console.log(task3)
      

}
