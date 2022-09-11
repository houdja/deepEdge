const fomrContact = document.querySelector('#form__contact');
const fomrButton = document.querySelector('#form_button');

fomrContact.addEventListener('submit', function(e){
    e.preventDefault();
    fomrButton.innerHTML = 'loading...';
    const data = new FormData(this);
    
    fetch('php/traitement.php', {
        method: 'POST',
        body: data
    })
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
    .then(data => {
        if(data.success != ''){
            alert(data.success);
            document.querySelectorAll('#form__contact input').forEach(input => {
                input.value = '';
            })
            document.querySelector('#message').value = '';
            fomrButton.innerHTML = 'Send Message';
        }else{
            alert(data.error);
        }
    })
    .catch(function(error){
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    })
})