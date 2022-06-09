
const resultadoImage = document.querySelector(".resultadoImage");
const showImage = document.querySelector(".showImage");


showImage.addEventListener('click', function(e) {
    e.preventDefault();
    
    let produtos = document.querySelector("#produtos").options.selectedIndex;

    const fruta = document.querySelector("#produtos").options[produtos].text;
    
    switch (fruta) {
        
        case 'banana':
            image = '<img src="https://as1.ftcdn.net/v2/jpg/02/08/21/62/1000_F_208216244_O3nE0nYaVqnGlVBP5akJgDdeugbsiIrx.jpg" alt="imagem de banana"/>';
            break;

        case 'melancia':
            image = '<img src="https://img.freepik.com/free-photo/slice-watermelon-watercolor-illustration-isolated-white-background_286656-936.jpg?w=2000" alt="imagem de melancia"/>';
            break;

        case 'morango':
            image = '<img src="https://www.clipartkey.com/mpngs/m/6-66247_strawberry-painting-png.png" alt="imagem de morango"/>';
            break;

            case 'pessego':
            image = '<img src="https://i.pinimg.com/originals/02/66/6b/02666bb19dfa2fb9db4f3189bc4d0266.jpg" alt="imagem de pessego"/>';
            break;

        case 'amora':
            image = '<img src="https://i.pinimg.com/originals/c3/7d/f8/c37df8ddfc2e7258c0133462e75c1654.jpg" alt="imagem de amora"/>';
            break;
    }
    
    resultadoImage.innerHTML = `${ image }`;
});