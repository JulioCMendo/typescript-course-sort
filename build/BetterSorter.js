"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetterSorter = void 0;
class BetterSorter {
    constructor(collection) {
        this.collection = collection;
    } // TODO
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.BetterSorter = BetterSorter;
