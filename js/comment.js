
let commentTop = document.querySelector('.comment_top');

function newComent(){
	let p = document.createElement('p');
	commentTop.append(p);
	let l = com.value
	p.innerHTML = l;
	scrollBy(0,70)
}

comShow.addEventListener('click',newComent);

