function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!

//? const newMail = new Mail("Hello", "world."); // Removed to avoid error

Mail.prototype.getMailDetails = function() {
    return `Subject: ${this.subject}, Message: ${this.message}`;
};

function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;

    this.printMail = function() {
        console.log(this.subject + ": " + this.message);
    }
  }
  const subject = process.argv[2];
  const message = process.argv[3];
  const newMail = new Mail(subject, message);
  
  // Type your code above this line!

  newMail.printMail();