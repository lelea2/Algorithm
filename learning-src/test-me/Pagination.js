// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
	this.collection = collection;
	this.itemsPerPage = itemsPerPage;
}
      
// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
	return this.collection.length;
}
      
// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
	return Math.ceil(this.collection.length / this.itemsPerPage);
}
      
// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
	const startIndex = pageIndex * this.itemsPerPage;
	const endIndex = startIndex + this.itemsPerPage - 1;
	if (startIndex > this.collection.length - 1 || startIndex < 0) {
	  return -1;
	} else {
	  return endIndex < this.collection.length ? this.itemsPerPage : this.collection.length - startIndex;
	}
}
      
// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
	if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
	  return -1;
	} else {
	  const itemPos = itemIndex + 1;
	  const remain = itemPos % this.itemsPerPage;
	  const pagePos = Math.floor((itemIndex + 1) / this.itemsPerPage);
	  return (pagePos - 1) + (remain > 0 ? 1 : 0);
	}
}
