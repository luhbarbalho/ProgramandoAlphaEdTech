
const resultadoImage = document.querySelector(".resultadoImage");
const resultadoInfo = document.querySelector(".resultadoInfo");
let image;
let info;


function changeCar () {
    let carros = document.querySelector("#carros").options.selectedIndex;
    const carro = document.querySelector("#carros").options[carros].text;
    
    switch (carro) {
        
        case 'Ferrari':
            image = '<img src="https://cdn.aquelamaquina.pt/images/2017-01/img_944x629$2017_01_19_12_12_20_26931.jpg" alt="Ferrari"/>';
            info =
            `<div>
                <p>Carro: Ferrari 308 GTS</p>
                <p>Marca: Ferrari</p>
                <p>Valocidade máx: 256 km/h</p>
                <p>0-100km: 6,5 segundos</p>
                <p>onde apareceu: No seriado magnum PI, magnum pegava "emprestado" de Robin Masters</p>
            </div>`;
            break;

        case 'DeLorean':
            image = '<img src="https://newsfeed.time.com/wp-content/uploads/sites/9/2011/08/backtothefuture.jpg?w=586" alt="DeLorean"/>';
            info =
            `<div>
                <p>Carro: DeLorean DMC -12</p>
                <p>Marca: DeLorean Motor Company</p>
                <p>Valocidade máx: 209,2 km/h</p>
                <p>0-100km: 8,6 segundos</p>
                <p>onde apareceu: Pela primeira vez, no filme de volta para o futuro (Em 2007 estimava-se que ainda existiam 6.500 unidades do DeLorean.)</p>
            </div>`;
            break;

        case 'Aston martin':
            image = '<img src="https://s2.glbimg.com/LAwsL3FJss-FPyZxSZ5J7RsCxcY=/smart/e.glbimg.com/og/ed/f/original/2019/07/29/sean-connery-as-james-bond-007-with-aston-martin-db5-goldfinger-set.jpg" alt="Aston martin"/>';
            info =
            `<div>
                <p>Carro: Aston Martin DB5</p>
                <p>Marca: Aston Martin</p>
                <p>Valocidade máx: 229 km/h</p>
                <p>0-100km: 6,5 segundos</p>
                <p>onde apareceu: Em James Bond - Goldfinger. Algumas das coisas especiais são canos de arma atrás dos indicadores dianteiros, o escudo de bala na janela traseira e uma placa giratória que mostra 3 combinações de placa.</p>
            </div>`;
            break;

            case 'Ford Falcon':
            image = '<img src="https://i.pinimg.com/originals/e3/ba/85/e3ba85e67f811f607e8832d417b3cf64.jpg" alt="Ford Falcon"/>';
            info =
            `<div>
                <p>Carro: Ford Falcon GT (XB)</p>
                <p>Marca: Ford Australia</p>
                <p>Valocidade máx: 193 km/h</p>
                <p>0-100km: 8,1 segundos</p>
                <p>onde apareceu: Em Mad Max. O “Interceptor”, como é conhecido, encontra-se atualmente no Orlando Automobile Museum</p>
            </div>`;
            break;

        case 'Camaro':
            image = '<img src="https://i.pinimg.com/originals/eb/90/db/eb90dbbadfcf6b444b4f6061b11ecbca.jpg" alt="Bumblebee"/>';
            info =
            `<div>
                <p>Carro: 1977 Chevrolet Camaro</p>
                <p>Marca: Chevrolet</p>
                <p>Valocidade máx: 230 km/h</p>
                <p>0-100km: 9,3 segundos</p>
                <p>onde apareceu: Em transformers, bumblebee prmeiro aparece como um Camaro 1977, antes de se transformar em um Camaro 2011 SS modificado</p>
            </div>`;
            break;
    }
    
    resultadoImage.innerHTML = `${ image }`;
    resultadoInfo.innerHTML = `${ info }`;
}

