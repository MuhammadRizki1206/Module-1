class ticket {
  constructor(movieTitle, seatNumber, ticketId) {
    this.movieTitle = movieTitle;
    this.seatNumber = seatNumber;
    this.ticketId = ticketId;
  }
}

class standardTicket extends ticket {
  constructor(movieTitle, seatNumber, ticketId, snackPackage) {
    super(movieTitle, seatNumber, ticketId);
    this.snackPackage = snackPackage;
  }
  chooseSnackPackage(snackPackage) {
    this.snackPackage = snackPackage;
    return `snack package for ticket ID ${this.ticketId}, is set to ${this.snackPackage}`;
  }
  displayInfo() {
    return `Movie: ${this.movieTitle}, Seat: ${this.seatNumber}, Ticket ID: ${this.ticketId}`;
  }
}

class vipTicket extends ticket {
  constructor(movieTitle, seatNumber, ticketId, loungeAccess) {
    super(movieTitle, seatNumber, ticketId);
    this.loungeAccess = loungeAccess;
  }
  grantLoungeAccess(hasAccess) {
    this.loungeAccess = hasAccess;
    if (hasAccess === true) {
      return `Lounge access for Ticket ID: ${this.ticketId}, is granted `;
    } else {
      return `Lounge access for Ticket ID: ${this.ticketId}, is Not Granted`;
    }
  }
  displayInfo() {
    return `Movie: ${this.movieTitle}, Seat: ${this.seatNumber}, Ticket ID: ${this.ticketId}`;
  }
}

const standardticket = new standardTicket("inception", "A12", "ST123");
standardticket.displayInfo();
console.log(standardticket.displayInfo());
console.log(standardticket.chooseSnackPackage("Popcorn & soda"));

const vipticket = new vipTicket("Interstellar", "B1", "VT456")
console.log(vipticket.displayInfo())
console.log(vipticket.grantLoungeAccess(true))
