const header = document.querySelector (header);
header.innerHTML = 
`<navclass `
import apiActions from './api/actions';
import Values from './components/ToDos';
import '../css/style.css';

pageBuild()

function pageBuild() {
    header();
    footer();
    navHome();
    navValues();
    navToDos();



    function footer() {
        const footer = document.querySelector('#footer');
       footer.innerHTML = Footer();
}

function navHome() {
    const homeButton = document.querySelector('.nav_home');
    homeButton.addEventListener('click', function() {
        document.querySelector('#app').innerHTML = Home();
    })
}
