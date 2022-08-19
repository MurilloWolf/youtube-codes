let linkToWhats;

function getData({ target: { children }}){
    const whatsNumber = children[0].value || '';
    const message = children[1].value || '';
    
    return { whatsNumber, message };
}

function generateUrl({ whatsNumber, message}) {
    const messageEncoded = encodeURI(message)
    const link = `https://wa.me/55${whatsNumber}?text=${messageEncoded}`;
    linkToWhats = link;
    showLink(hasWhatsNumber(whatsNumber))
}

function hasWhatsNumber(whatsNumber){
    return whatsNumber.trim() !== ''
}

function submitForm( event ){
    event.preventDefault();
    generateUrl(getData(event));
}

function copyToClipboard(){
    if(navigator)
        navigator.clipboard.writeText(linkToWhats).then(function() {
            Swal.fire({
                heightAuto:false,
                title: 'Link copiado!',
                icon: 'success'
            })
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function showLink(link){
    const linkElement = document.querySelector('#link')
    linkElement.style.visibility =  link ? 'visible': 'hidden' ;
    console.log(link)
}