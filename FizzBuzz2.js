console.log("start");

for (let i = 1; i < 101; i++) {
  let text = "";

  if (i % 3 === 0) {
    text = text + "FIZZ";
  }

  //let text = "";
  if (i % 5 === 0) {
    text = text + "BUZZ";
  }

  if (text) {
    //  Fizzz buzz or fizzbuzz
    console.log(text);
  } else {
    console.log(i);
  }
}
