load("CArray.js");
CArray.prototype.shellSort = shellsort;
CArray.prototype.gaps = [5,3,1];
function shellsort() {
   for (var g = 0; g < this.gaps.length; ++g) {
      for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
         var temp = this.dataStore[i];
         for (var j = i; j >= this.gaps[g] &&
                         this.dataStore[j-this.gaps[g]] > temp;
              j -= this.gaps[g]) {
            this.dataStore[j] = this.dataStore[j - this.gaps[g]];
         }
         this.dataStore[j] = temp;
      }
   }
}

CArray.prototype.shellsort1 = shellsort1;
function shellsort1() {
   var N = this.dataStore.length;
   var h = 1;
   while (h < N/3) {
      h = 3 * h + 1;
   }
   while (h >= 1) {
      for (var i = h; i < N; i++) {
         for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];
              j -= h) {
            this.swap(this.dataStore, j, j-h);
         }
      }
      h = (h-1)/3;
   }
}
