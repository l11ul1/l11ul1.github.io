var btnGetWorks = document.getElementById("getWorks");
var divMyWorks = document.getElementById("myWorks");

btnGetWorks.addEventListener("click", getRepos);
async function getRepos(){
	const url = "https://api.github.com/users/l11ul1/repos";
	const response = await fetch(url);
	const items = await response.json();
	
	items.forEach(i=>{
		console.log(i);
		var mydiv = document.createElement('div');
		mydiv.className = "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
		
		var card = document.createElement('div');
		card.className = "card text-white bg-dark";
		card.style.width = "18rem";
		card.style.height = "14rem";
		
		
		var cardBody = document.createElement('div');
		cardBody.className = "card-body";
		
		var h4 = document.createElement('h4');
		h4.className = "card-title";
		h4.innerHTML = i.name;
		
		var p = document.createElement('p');
		p.className = "card-text" ;
		p.innerHTML = i.description;
		
		a = document.createElement('a');
		a.href = i.html_url;
		a.className = "btn btn-outline-light btn-sm";
		a.innerHTML = "show on the github";
		
		var footer = document.createElement('div');
		footer.className = "card-footer bg-transparent"
		
		divMyWorks.appendChild(mydiv);
		mydiv.appendChild(card);
		card.appendChild(cardBody);
		card.appendChild(footer);
		cardBody.appendChild(h4);
		cardBody.appendChild(p);
		footer.appendChild(a);
		btnGetWorks.style.visibility = "hidden";
	});
}