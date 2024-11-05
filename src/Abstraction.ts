{

    //Interface 
    interface Vehicle {
        startCar(): void;
        stopCar(): void;
        accelerateCar(): void;
    }

    class Vehicle1 implements Vehicle {

        startCar(): void {
          console.log('Staring Vehicle')
        }
        stopCar(): void {
            console.log('Stopping Vehicle')
        }
        accelerateCar(): void {
            console.log('Accelerating Vehicle')
        }
        tesingCar(): void{
            console.log('Testing Vehicle')
        }
        
    }

    const car = new Vehicle1()
    car.startCar()


    //Abstract

    abstract class Vehicle2 {
        abstract startCar(): void;
        abstract stopCar(): void;    
        abstract accelerateCar(): void;

        tesingCar(): void{
            console.log('Testing Vehicle')
        }
    }

    class Car extends Vehicle2{
        startCar(): void {
            console.log('Staring Car')
        }
        stopCar(): void {
            console.log('Stopping Car')
        }
        accelerateCar(): void {
            console.log('Accelerating Car')
        }
    }


}