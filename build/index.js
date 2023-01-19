"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BetterSorter_1 = require("./BetterSorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedLists_1 = require("./LinkedLists");
class Sorter {
    // using unions is a bad idea, as usual, because
    // we have to keep adding if statements to fix
    // for every new type, and also make this a super
    // long list of unions
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // this logic works for array of numbers, but
                // no with other types, like strings
                if (this.collection instanceof Array) {
                    // only allow running this sort if it is an Array
                    // use instanceof for non-primitive types
                    // including custom classes
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // typeof only for primitives: boolean
                // string, number or symbol
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
// const sorter = new Sorter([10, 3, -5, 0]);
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const sorter = new BetterSorter_1.BetterSorter(numbersCollection);
sorter.sort();
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sortedChar = new BetterSorter_1.BetterSorter(charactersCollection);
sortedChar.sort();
console.log(numbersCollection.data, charactersCollection.data);
const linkedList = new LinkedLists_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sortedList = new BetterSorter_1.BetterSorter(linkedList);
sortedList.sort();
linkedList.print();
