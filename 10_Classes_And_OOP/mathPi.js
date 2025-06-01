//object have some hidden properties 

// we can see those properties through getOwnPropertyDescriptor 

//take two parameters 1.object 2. property

// getownpropertyowndescriptor(Math,property name)

//pi object has four properties

// 1. value, 2. enumerate  3. configurable 4. writable


// console.log(Math.PI);
// console.log(Math);

//we can not override its value

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor)

const obj = {
    name : "Adam",
    rank : 14,
    logedIn : true,


     remarks : function (){

        console.log(`${this.name} is a great man`)

    }
}

// console.log(obj)

const prop = Object.getOwnPropertyDescriptor(obj, "name")

// console.log(prop)


Object.defineProperty(obj, "name",{
    // writable : false,
    enumerable : false,  // in conlose.log it will be not display on the screen
    configurable : false

})

const prop1 = Object.getOwnPropertyDescriptor(obj, "name")

// console.log(prop1)

obj.name = " Hamza ";
// console.log(obj)

//object are not iteratable directly by for...of loop

for (let [key, value] of Object.entries(obj)) {

    if(typeof value !== 'function')
    {
        console.log(`${key} :  ${value}`)

    }

    
    
}



