function say() {
	let Nama = document.getElementById('nama').value;

	if (Nama == '') {
		document.getElementById('output').innerText = 'Hello There';
	} else {
		document.getElementById('output').innerText = Nama + ' (Terima Kasih THR nya....) ';
	}
}
