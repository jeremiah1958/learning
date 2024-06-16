try {
    throw new SyntaxError("what is your name");
  } catch (e) {
    console.log(e instanceof SyntaxError); // true
    console.log(e.message); // "what is your name"
    console.log(e.name); // "SyntaxError"
    console.log(e.stack); // Stack of the error
  }
  