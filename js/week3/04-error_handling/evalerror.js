try {
    throw new EvalError("Hello");
  } catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message); // "Hello"
    console.log(e.name); // "EvalError"
    console.log(e.stack); // Stack of the error
  }