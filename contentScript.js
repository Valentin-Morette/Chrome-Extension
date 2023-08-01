document.querySelectorAll('p').forEach((element) => {
	element.textContent = element.textContent.toUpperCase();
});

document.querySelectorAll('.is-web-banner-groupe-3').forEach((element) => {
	element.parentNode.removeChild(element);
});

if (window.location.href === 'https://inter-actif.com/') {
	// Créez la div de la modal
	const modal = document.createElement('div');
	modal.style.position = 'fixed';
	modal.style.left = '0';
	modal.style.top = '0';
	modal.style.width = '100%';
	modal.style.height = '100%';
	modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	modal.style.display = 'flex';
	modal.style.justifyContent = 'center';
	modal.style.alignItems = 'center';
	modal.style.zIndex = '1000';

	// Créez la div du contenu de la modal
	const content = document.createElement('div');
	content.style.backgroundColor = '#fff';
	content.style.padding = '20px';
	content.style.borderRadius = '5px';
	content.style.textAlign = 'center';

	// Ajoutez une fonction pour basculer la couleur du fond
	let isRed = false;
	const toggleBackgroundColor = () => {
		isRed = !isRed;
		content.style.backgroundColor = isRed ? 'red' : '#fff';
	};

	const interval = setInterval(toggleBackgroundColor, 50);

	// Ajoutez le texte à la div du contenu
	const text = document.createTextNode(
		'Félicitations, vous avez trouvé la page secrète'
	);
	content.appendChild(text);

	// Ajoutez le contenu à la div de la modal
	modal.appendChild(content);

	// Ajoutez la modal au body du document
	document.body.appendChild(modal);

	// Fermez la modal en cliquant en dehors du contenu
	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			clearInterval(interval);
			modal.parentNode.removeChild(modal);
		}
	});
}
