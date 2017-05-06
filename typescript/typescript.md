#### 1. What is the difference between *.ts and *.d.ts?

###### *.d.ts (definition file)
Only allowed to contain TypeScript code that doesn't generate any JavaScript code in the output. If you attempt to use any feature of TypeScript that would generate JavaScript, you'll get an error.

```javascript
declare function displayMessage(message: string);
```

###### *.ts
Standard file extension you use when writing TypeScript. It will be compiled to JavaScript.

###### Declare keyword
The declare keyword is used for ambient declarations where you want to define a variable that may not have originated from a TypeScript file.

```javascript
// TypeScript runtime will assign unKnownLibrary variable any type. You won’t get Intellisense in design time but you will be able to use the library in your code.
declare var unKnownLibrary;
```

#### 2. How to copile Typscript file?

```
npm install -g typescript
```

```
tsc <TypeScript File Name>
```

#### 3. Typescript benefits

* It helps in code structuring
* Use class based object oriented programming
* Impose coding guidelines
* Offers type checking
* Compile time error checking
* Intellisense

##### TypeScript supports the following object oriented terms:

* Modules
* Classes
* Interfaces
* Data Types
* Member functions

#### 4. Which are the Different Data Types Supported by TypeScript?
* Boolean

```javascript
var bValue: boolean = false;
```

* Number

```javascript
var age: number = 16;
```
* String

```javascript
var name: string = "jon";
```
* Array

```javascript
var list:number[] = [1, 2, 3];
```

* Enum

```javascript
enum Color {Red, Green, Blue};
var c: Color = Color.Green;
```

* Any

```javascript
var unknownType: any = 4;
```

* Void

```javascript
function NoReturnType(): void {}
```

#### 5. Is It Possible to Combine Multiple .ts Files into a Single .js File?

```
### Output: comman.js
tsc --outFile comman.js file1.ts file2.ts file3.ts

### Output: file2.ts and file3.ts will be compiled and the output will be placed in file1.ts
tsc --outFile file1.ts file2.ts file3.ts

```

#### 6. Inheritance in Typescript

```javascript
class Animal {
  public domestic:boolean;
  constructor(public name: string) { }
}

class Cat extends Animal {
  constructor(name: string, domestic: boolean) {
    super(name);
    this.domestic = true;
  }
}

class Tiger extends Animal {
  constructor(name: string, domestic: boolean) {
    super(name);
    this.domestic = false;
  }
}
```

* Using super(), we can call base class constructor from parent class

#### 7. How Can You Allow Classes Defined in a Module to be Accessible Outside of the Module?

```javascript
// NOT WORKING EXAMPLE
module Vehicle {
  class Car {
    constructor(public make: string, public model: string) { }
  }
  var audiCar = new Car("Audi", "Q7");
}
// This won't work
var fordCar = Vehicle.Car("Ford", "Figo");

/* --------------------------------------------------------------------*/

// CORRECT EXAMPLE
module Vehicle {
  export class Car {
    constructor(public make: string, public model: string) { }
  }
  var audiCar = new Car("Audi", "Q7");
}
// This works now
var fordCar = Vehicle.Car("Ford", "Figo");
```

#### 8. TypeScript Support Function Overloading

* Note: When you overload in TypeScript, you only have one implementation with multiple signatures.

```javascript
class Customer {
  name: string;
  Id: number;

  add(Id: number);
  add(name:string);
  add(value: any) {
  if (value && typeof value == "number") {
    //Do something
  }
  if (value && typeof value == "string") {
    //Do Something
  }
 }
}
```

#### 9. What is tsconfig.json File?

The tsconfig.json file specifies the root files and the compiler options required to compile the project. And using this file, we can streamline building TypeScript project. Below is a sample tsconfig.json file.

```javascript
{
 "compilerOptions": {
  "removeComments": true,
  "sourceMap": true
 },
 "files": [
    "main.ts",
    "othermodule.ts"
  ]
}
```
