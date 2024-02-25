/*Let's put some js code */

const logo = document.getElementById('logo');

const nav = document.getElementById('nav');

const close = document.getElementById('close');

/*here we create a function to check for navigation */

function isOpen()
{
  return nav.style.right === '0';
}

/* event listener for the menu button */

logo.addEventListener('click', () =>{
  if(!isOpen())
  {
    nav.style.right = '0';
  }
  else
  {
    nav.style.right = '-250px';
  }
});

/* event listener for the closing button */

close.addEventListener('click', () =>{
  if(!isOpen())
  {
    nav.style.right = '-250px';
  }
  else
  {
    nav.style.right = '0';
  }
});

