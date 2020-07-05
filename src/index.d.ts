/**
Set to uppercase the first char all keys of an object.

@returns Return a new object with all properties and sub-propperties 
         with first letter to uppper case
@example
```
upCaseKeys({Foo: "foo value", BAR: true, Baz: { Sub1: "sub1", Sub2: "sub2" }});

//=> {foo: "foo value", bAR: true, baz: { sub1: "sub1", sub2: "sub2" }}
```
*/
export declare function upCaseKeys(value: any): any;

/**
Set to lowercase the first char all keys of an object.

@returns Return a new object with all properties and sub-propperties 
         with first letter to lower case
@example
```
lowCaseKeys({Foo: "foo value", BAR: true, Baz: { Sub1: "sub1", Sub2: "sub2" }});

//=> {foo: "foo value", bAR: true, baz: { sub1: "sub1", sub2: "sub2" }}
```
*/
export declare function lowCaseKeys(value: any): any;

