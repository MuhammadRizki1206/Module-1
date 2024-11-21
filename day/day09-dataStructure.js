// --- DATA STRUCTRE ---
//Basic data structure adalah array
//Di data structure ada yg namanya stack
// - Contoh Stack -> konsep seperti piring di rumah makan padang, tumpukan piring yang di cuci

class Stack {
  constructor() {
    this.items = [];
  }

  pushItem(data) {
    this.items.push(data); //Note = menambah data stack dari bawah ke atas
  }

  popItem() {
    return this.items.pop(); //Note = mengambil data dari atas stack dan menghapusnya
  }

  peekItem() {
    return this.items[this.items.length - 1]; //Note = melihat item teratas tanpa menghapus
  }
}

// const stack = new Stack()
// stack.pushItem("Piring 1")
// stack.pushItem("Piring 2")
// stack.pushItem("Piring 3")
// stack.pushItem("Piring 4")
// stack.popItem()
// console.log(stack.peekItem())

// -- QUEUE -> seperti antrian di gacoan

class Queue {
  constructor() {
    this.items = [];
  }

  enqueueItem(data) {
    this.items.push(data); //Note = menambahkan ke akhir antrian
  }

  dequeueItem() {
    return this.items.shift(); //Note = mengambil data dari depan antrian dan menghapusnya
  }

  front() {
    return this.items[0]; //Note = output nya adalah data paling depan
  }
}

//  const queue = new Queue()
//  queue.enqueueItem("orang 1")
//  queue.enqueueItem("orang 2")
//  console.log("origin queue : ", queue)
//  console.log(queue.dequeueItem())
//  console.log("after dequeue : ", queue)
//  console.log(queue.front())

// Stack Dan Queue adalah sebuah konsep

// -- Set -> memberikan keunikan di setiap elemen array
//  let mySet = new Set()

//  mySet.add(1)
//  mySet.add(2)
//  mySet.add(3)
//  mySet.add("abcd")
// console.log("Before delete : ", mySet)
//  //mySet.delete(2)
//  mySet.delete("abcd")
//  console.log("After delete : ", mySet)

//  //Looping set
//  let saveElement = []
//  mySet.forEach((value) => {
//     console.log(value)
//     saveElement.push(value)//Note = untuk meng convert ke array
//  })

//  console.log("convert to array -> ", saveElement)

//-- Hash Table/Map -> memasangkan setiap elemen dengan nomor unik
let phoneContact = new Map();
phoneContact.set("Bob", "123-456-7890");
//Note = "Bob" -> key, "123-456-7890" -> value
phoneContact.set("John", "987-654-3210");
phoneContact.set("Jane", "999-654-3210");
//Note = Jika key nya sama maka yg terprint adalah yg paling bawah atau yg ter update

//console.log(phoneContact)
//console.log(phoneContact.get("Bob"))//Note = untuk mendapatkan nomor telepon Bob, harus menyebut key nya dulu
// console.log("Search for Bob : ", phoneContact.get("Bob"));

// let saveContact = [];
// phoneContact.forEach((value, key) => {
//   //console.log(key + " : " + value)
//   saveContact.push({
//     name: key,
//     phone_number: value,
//   });
// });
// console.log("collect phone number : ", saveContact);
// console.log("search contact John : ", saveContact[2].phone_number)//Note = outputnya hanya akan memprint contact nya John

// --Linked list
// -- Single linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; //Note = jika list masih kosong, node baru menjadi head
    } else {
      let current = this.head;
      while (current.next) {
        //Note = while menjadi penyambung antar Node
        //Note = next gunanya untuk cek habis node 1 apakah masih ada node lain
        current = current.next; //Note = bergerak ke node terakhir
      }
      current.next = newNode; //Note = menyambungkan node terakhir dengan node baru
    }
  }
}

// const list = new LinkedList();
// list.append("Node 1");
// list.append("Node 2");
// list.append("Node 3");
// console.log(list);

// -- Double Linked List
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const doublyList = new DoublyLinkedList()
doublyList.append(" Node 1")
doublyList.append(" Node 2")
console.log(doublyList)