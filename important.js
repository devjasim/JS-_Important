//for show something with click something boom
const navSlide = () => {
    const clickCart = document.querySelector('.cart_show');
    const addClass = document.querySelector('html');

    //toggle nav
    clickCart.addEventListener('click', () => {
        addClass.classList.add('for-cart-active');
    });
}

//end show something with click button

navSlide();

//for remove something with the close button
const forRemove = () => {
    const crossBtn = document.querySelector('.fa-times-circle');
    const remove = document.querySelector('html');

    crossBtn.addEventListener('click', () => {
        remove.classList.remove('for-cart-active');
    });

}

forRemove();

//end remove something with click button





for showing full page popup after delay time 
$(document).ready(function ()
{
    //Fade in delay for the popup (control timing here)
	$("#popup_one").delay(5000).fadeIn(500);
	
	//Hide dialouge and background when the user clicks the close button
	$("#btn_close").click(function (e)
	{
		HideDialog();
		e.preventDefault();
	});
});

function HideDialog()
{
	$("#popup_one").fadeOut(300);
}

//end showing popup after delay time