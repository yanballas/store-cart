export class Cart {
	constructor(
		items,
		cartClass = "cart",
		plusClass = "plus",
		minusClass = "minus",
		deleteClass = "delete",
		currency = ''
	) {
		this.items = items;
		this.cartClass = cartClass;
		this.plusClass = plusClass;
		this.minusClass = minusClass;
		this.deleteClass = deleteClass;
		this.currency = 'RUB';
	}
	
	goodsPlus(art) {
		this.items[art]["count"]++;
	}
	
	goodsMinus(art) {
		if (this.items[art]["count"] - 1 === 0) {
			this.goodsDelete(art)
			return
		}
		this.items[art]["count"]--;
	}
	
	goodsDelete(art) {
		delete this.items[art]
	}
	
	getTotal() {
		let total = 0;
		for (const key in this.items) {
			total += this.items[key]["count"] * this.items[key]["price"];
		}
		return total
	}
	
	render() {
		const table = document.createElement("table");
		table.classList.add(this.cartClass);
		for (const key in this.items) {
			const goods = this.items[key];
			const trGood = document.createElement("tr");
			let tdGood = document.createElement("td");
			let button = document.createElement("button");
			button.classList.add(this.deleteClass)
			button.classList.add('button-primary')
			button.innerHTML = 'x'
			button.setAttribute('data-articul', key);
			tdGood.appendChild(button);
			trGood.appendChild(tdGood);
			
			tdGood = document.createElement("td");
			const img = document.createElement("img");
			img.src = goods.image;
			tdGood.appendChild(img);
			trGood.appendChild(tdGood);
			
			tdGood = document.createElement("td");
			const titleGood = document.createElement("h4");
			titleGood.textContent = goods.name;
			tdGood.appendChild(titleGood);
			trGood.appendChild(tdGood);
			
			tdGood = document.createElement("td");
			button = document.createElement("button");
			button.classList.add(this.minusClass)
			button.classList.add('button-primary')
			button.innerHTML = '-'
			button.setAttribute('data-articul', key);
			tdGood.appendChild(button);
			trGood.appendChild(tdGood);
			
			tdGood = document.createElement("td");
			let span = document.createElement("span");
			span.innerText = goods.count;
			tdGood.appendChild(span);
			trGood.appendChild(tdGood);
			
			tdGood = document.createElement("td");
			button = document.createElement("button");
			button.classList.add(this.plusClass)
			button.classList.add('button-primary')
			button.innerHTML = '+'
			button.setAttribute('data-articul', key);
			tdGood.appendChild(button);
			trGood.appendChild(tdGood);
			
			tdGood = document.createElement("td");
			span = document.createElement("span");
			span.innerText = `${goods.count * goods.price} ${this.currency}`;
			tdGood.appendChild(span);
			trGood.appendChild(tdGood);
			
			table.appendChild(trGood);
		}
		const currencyTotal = this.getTotal()
		const trTotal = document.createElement("tr");
		const tdTotal = document.createElement("td");
		tdTotal.setAttribute("colspan", '7');
		tdTotal.style.textAlign = "right";
		tdTotal.innerHTML = `<span class="total">Total: ${currencyTotal} ${this.currency}</span>`;
		trTotal.appendChild(tdTotal);
		table.appendChild(trTotal);
		return table;
	}
}