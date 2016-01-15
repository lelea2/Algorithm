Referenced from: https://web.archive.org/web/20130106160004/http://addyosmani.com/resources/essentialjsdesignpatterns/book#decoratorpatternjavascript


### 1. What is pattern?

* A pattern is a reusable solution that can be applied to commonly occurring problems in software design.

* Benefits: proven solution, easy to reused, expressive.

* Patterns can assist in preventing minor issues that cause major problem in apllication dev process, can provide generalized solutions, decrease overall file-size footprint of our code by avoiding repetition.

**When to use pattern?** -- rule of 3

* Fitness of purpose
* Usefulness
* Applicability


### 2. Anti-pattern -- Bad design in JS

* Pollluting global namspace by defining large number of variables in global context
* Passing strings rather than function in setTimeout() or setInterval(), which trigger eval() internally ==> bad
* Modify Object class prototype
* Inline JS
* Use of document.write where native DOM document.createElement are more appropriate.


### 3. Categories of Design Patterns

* (1) Creational Design pattern
Focus on object creation, control creation process. Eg: Constructor, Factory, Abstract, Prototype, Singleton and Builder.

* (2) Structural Design Patterns
Concern with object composition, relationship between different objects. Eg: Decorator, Facade, Flyweight, Adapter and Proxy.

* (3) Behavioral Design Patterns
Improve and streamline communication between disparate objects in a system. Eg: Iterator, Mediator, Observer and Visitor

### 4. Javascript design pattern

#### 4.1 Constructor Pattern

#### 4.2 Module Pattern

#### 4.3 Revealing Module Pattern

#### 4.4 Singleton Pattern

#### 4.5 Observer Pattern

#### 4.6 Mediator Pattern

#### 4.7 Prototype Pattern

#### 4.8 Command Pattern

#### 4.9 Facade Pattern

#### 4.10 Factory Pattern

#### 4.11 Mixin Pattern

#### 4.12 Decorator Pattern

#### 4.13 Flyweight Pattern


### 5. JavaScript MV* Patterns

#### 5.1 MVC Pattern (Model-View-Controller)

#### 5.2 MVP Pattern (Model-View-Presenter)

#### 5.3 MVVM Pattern (Model-View-ViewModel)


### 6. Modern Modular JavaScript Design Patterns

#### 6.1 AMD

#### 6.2 CommonJS

#### 6.3 ES Harmony


### 7. Design Pattern in jQuery

#### 7.1 Composite Pattern

#### 7.2 Adapter Pattern

#### 7.3 Facade Pattern

#### 7.4 Observer Pattern

#### 7.5 Iterator Pattern

#### 7.6 Lazy Initialization Pattern

#### 7.7 Proxy Pattern

#### 7.8 Builder Pattern
