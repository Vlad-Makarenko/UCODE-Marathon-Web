var Number = 444;
var BigInt = 4n;
var String = "Hello, Vlad!";
var Boolean = true;
var Null = null;
var Undefined;
var Object = {};
var Symbol = Symbol('V');
var Function = () => {};

var types = "Number is " + typeof(Number) + "\n" + "BigInt is " + typeof(BigInt) + "\n"
            + "String is " + typeof(String) + "\n" + "Boolean is " + typeof(Boolean) + "\n"
            + "Null is null\n" + "Undefined is " + typeof(Undefined) + "\n" + 
            + "Symbol is " + typeof(Symbol) + "\n" + "Function is " + typeof(Function) + "\n";

alert(types);

