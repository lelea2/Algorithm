function UndoItem (perform, data) {
	this.perform = perform;
	this.data = data;
}

/**
 * UndoStack:
 * Easy undo-redo in JavaScript.
 **/

function UndoStack(self) {
	this.stack = [];
	this.current = -1;
	this.self = self;
}

/**
 * UndoStack#push (action, data);
 * perform(true, data)  -> Function which performs redo based on previous state
 * perform(false, data) -> Function which performs undo based on current state
 * data -> Argument passed to undo/redo functions
 **/
UndoStack.prototype.push = function (perform, data) {
	this.current++;

	// We need to invalidate all undo items after this new one
	// or people are going to be very confused.
	this.stack.splice(this.current);
	this.stack.push(new UndoItem(perform, data));
};

UndoStack.prototype.undo = function () {
	var item;

	if (this.current >= 0) {
		item = this.stack[this.current];
		item.perform.call(this.self, false, item.data);
		this.current--;
	} else {
		throw new Error("Already at oldest change");
	}
};

UndoStack.prototype.redo = function () {
	var item;

	item = this.stack[this.current + 1];
	if (item) {
		item.perform.call(this.self, true, item.data);
		this.current++;
	} else {
		throw new Error("Already at newest change");
	}
};

UndoStack.prototype.invalidateAll = function () {
	this.stack = [];
	this.current = -1;
};


/************************Usage**************************/
let undostack = new UndoStack(null);

function pushAction (perform, data) {
  let return_value;

  // We want the redo call before the push in case it throws.
  return_value = perform.call(this, true, data);
  undostack.push(perform, data);

  return return_value;
};

function changeBackground (color_new) {
  let style = document.body.style;
  let color_old = style.backgroundColor;
  pushAction (
    function (redo, data) {
      style.backgroundColor = redo ? data[1] : data[0];
    },
    [color_old, color_new]
  );
}
