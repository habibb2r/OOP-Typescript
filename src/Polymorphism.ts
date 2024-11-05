{
    class Shape {
        getArea(){
            return 0
        }
    }

    class Circle extends Shape {
        radius: number
        constructor(radius: number){
            super()
            this.radius = radius
        }
        getArea(){
            return Math.PI * this.radius * this.radius
        }
    }


    class Racktangle extends Shape {
        width: number;
        height: number;

        constructor(width: number, height: number){
            super()
            this.width = width
            this.height = height
        }
        getArea(){
            return this.width * this.height
        }
    }

    const getShapeArea = (param: Shape) =>{
        console.log(param.getArea())
    }

    const shape1 = new Shape()
    const shape2 = new Circle(5)
    const shape3 = new Racktangle(5, 10)

    getShapeArea(shape1)
    getShapeArea(shape2)    
    getShapeArea(shape3)

}