function toggleDirection() {
    const body = document.body;
    body.setAttribute('dir', body.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr');
}
// dropdown
document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.getElementById('customDropdownBtn');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownBtn.addEventListener('click', function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

// copy part
function copyText() {
   
    var spanElement = document.getElementById('textToCopy');
    var textToCopy = spanElement.innerText;

    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
          
            spanElement.innerText = 'Text Copied';
            spanElement.style.color = '#8A74F9';
            spanElement.style.fontWeight = '600';
            spanElement.style.width= '100%';
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });
}
// pagination
function changePage(page) {
    
    var links = document.querySelectorAll('.pagination a');

   
    links.forEach(function (link) {
        link.classList.remove('active');
    });

   
    if (page === 'prev') {
       
    } else if (page === 'next') {
      
    } else {
       
        document.querySelector('.pagination a:nth-child(' + page + ')').classList.add('active');
    }

   
    
}