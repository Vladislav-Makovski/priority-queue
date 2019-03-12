class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left === null){
			this.left = node;
		}else if(this.right === null){
			this.right = node;
		}
		node.parent = this;
	}

	removeChild(node) {
		if(this.left === node){
			this.left = null;
			node.parent =null;
		}else if(this.right === node){
			this.right = null;
			node.parent = null;
		}else {
			throw new Error;
		}

	}

	remove() {
		if(this.parent !== null){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent !== null){
			let parentOfRoot = this.parent;
			if(this.parent.parent !== null){
				if(this.parent.parent.left === parentOfRoot){
					this.parent.parent.left = this;
				}
				if(this.parent.parent.right === parentOfRoot){
					this.parent.parent.right = this;
				}
	
			}
			let leftChildOfRoot = this.left;
			let rightChildOfRoot = this.right;
			if(this.parent.left === this){
				this.left = this.parent;
				if(this.parent.right !== null){
					this.right = this.parent.right;
					this.right.parent = this;
				}
			}else{
				this.right = this.parent;
				this.left = this.parent.left;
				this.left.parent = this;
			}
			if(leftChildOfRoot !== null){
				this.parent.left = leftChildOfRoot;
				this.parent.left.parent = this.parent;
			}
			if(rightChildOfRoot !== null){
				this.parent.right = rightChildOfRoot;
				this.parent.right.parent = this.parent;
			}
		let a = this.parent.parent;
		this.parent.parent = this;
		this.appendChild
		this.parent = a;

		}
	}
}

module.exports = Node;
