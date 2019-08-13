//const header = document.querySelector(header);
//header.innerHTML = `<navclass> `
import apiActions from './api/api-actions';
import Values from './components/value';
import './css/style.css';

pageBuild()

function pageBuild() {
    header();
    footer();
    navHome();
    navValues();
    navToDos();
}

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

function navValues() {
    const valueButton = document.querySelector('.nav_values');
    valueButton.addEventListener('click', function(){
        apiActions.getRequest ('https://localhost:44326/api/values', values => {
            document.querySelector('#app').innerHTML = Values(values);
    })
})
}