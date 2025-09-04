function Journey(start, end) {
  this.start = start;
  this.end = end;

  this.printJourney = function () {
    console.log(this.start + ", " + this.end);
  };
}

  // Type your code below this line!

const from = process.argv[2];
const to = process.argv[3];

const newJourney = new Journey(from, to);

  // Type your code above this line!

  newJourney.printJourney(); 


