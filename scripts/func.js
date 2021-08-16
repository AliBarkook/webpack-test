
button.addEventListener('click', toggleParagraph);

function toggleParagraph() {
    console.log('but clicked!');
    secretParagraph.style.display == 'none'? secretParagraph.style.display = 'block': secretParagraph.style.display = 'none';
} 