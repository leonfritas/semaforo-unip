// Configuração dos tempos (em segundos)
    let fluxoSemaforo = 20; 
    let fluxoVerde = 10;
    let fluxoAmarelo = 5;
    let fluxoVermelho = 5

    let tempoEntreSemarofoUmeDois = 5;
    let tempoEntreSemarofoDoiseTres = 14;

    let interval;
    let tempoGlobal = 0;

    const semaforoEldorado = document.querySelectorAll('.eldorado');
    const luzes = document.querySelectorAll('.luz');
    const luzEldorado = document.querySelectorAll('.luzEldorado');
    const luzPlaza = document.querySelectorAll('.luzPlaza');
    const luzMcDonalds = document.querySelectorAll('.luzMc');
    const carro = document.querySelector('.classCarro img');

    console.log(carro);
    /* EL DORADO */

    function ligarSemaforoElDorado() {
        let contadorVerde = 0;
        luzEldorado[2].classList.add('ativo');

        
        //
        let verdeInterval = setInterval(() => {
            contadorVerde++;                             
            //  
            if (luzEldorado[2].classList.contains('ativo') && contadorVerde >= fluxoVerde) {
                ligarSinalAmareloEl();
                clearInterval(verdeInterval);                
            }                      
        }, 1000);
    }

    function ligarSinalAmareloEl() {
        let contadorAmarelo = 0;
        luzEldorado[2].classList.remove('ativo');
        luzEldorado[1].classList.add('ativo');
                      
        //
        let amareloInterval = setInterval(() => {
            contadorAmarelo++;
            
            if (luzEldorado[1].classList.contains('ativo') && contadorAmarelo >= fluxoAmarelo) {
                ligarSinalVermelhoEl();
                clearInterval(amareloInterval); 
            }
            //                
        }, 1000);           
    }    
    
    function ligarSinalVermelhoEl() {
        let contadorVermelho = 0;
        luzEldorado[1].classList.remove('ativo');
        luzEldorado[0].classList.add('ativo');
        
        
        let vermelhoInterval = setInterval(() => {
            contadorVermelho++;
            
            if (luzEldorado[0].classList.contains('ativo') && contadorVermelho >= fluxoVermelho) {
                luzEldorado[0].classList.remove('ativo');
                luzEldorado[2].classList.add('ativo');
                //
                ligarSemaforoElDorado();
                //
                clearInterval(vermelhoInterval);                            
            }                      
        }, 1000);
    }
    
    /* PLAZA */

    function ligarSemaforoPlaza() {
        let contadorVerde = 0;
        luzPlaza[0].classList.remove('ativo');
        luzPlaza[2].classList.add('ativo');
        
        //
        let verdeInterval = setInterval(() => {
            contadorVerde++;
                             
            //  
            if (luzPlaza[2].classList.contains('ativo') && contadorVerde >= fluxoVerde) {
                ligarSinalAmareloPl();
                clearInterval(verdeInterval);                
            }                      
        }, 1000);
    }

    function ligarSinalAmareloPl() {
        let contadorAmarelo = 0;
        luzPlaza[2].classList.remove('ativo');
        luzPlaza[1].classList.add('ativo');
                     
        //
        let amareloInterval = setInterval(() => {
            contadorAmarelo++;
            
            if (luzPlaza[1].classList.contains('ativo') && contadorAmarelo >= fluxoAmarelo) {
                ligarSinalVermelhoPl();
                clearInterval(amareloInterval); 
            }
            //                
        }, 1000);           
    }    
    
    function ligarSinalVermelhoPl() {
        let contadorVermelho = 0;
        luzPlaza[1].classList.remove('ativo');
        luzPlaza[0].classList.add('ativo');
        
        
        let vermelhoInterval = setInterval(() => {
            contadorVermelho++;
            
            if (luzPlaza[0].classList.contains('ativo') && contadorVermelho >= fluxoVermelho) {
                luzPlaza[0].classList.remove('ativo');
                luzPlaza[2].classList.add('ativo');
                //
                ligarSemaforoPlaza('Eldorado');
                //
                clearInterval(vermelhoInterval);                            
            }                      
        }, 1000);
    }

    /* MC DONALDS */

    function ligarSemaforoMc() {
        let contadorVerde = 0;                
        luzMcDonalds[0].classList.remove('ativo');
        luzMcDonalds[2].classList.add('ativo');
        
        //
        let verdeInterval = setInterval(() => {
            contadorVerde++;
                              
            //  
            if (luzMcDonalds[2].classList.contains('ativo') && contadorVerde >= fluxoVerde) {
                ligarSinalAmareloMc();
                clearInterval(verdeInterval);                
            }                      
        }, 1000);
    }

    function ligarSinalAmareloMc() {
        let contadorAmarelo = 0;
        luzMcDonalds[2].classList.remove('ativo');
        luzMcDonalds[1].classList.add('ativo');
                    
        //
        let amareloInterval = setInterval(() => {
            contadorAmarelo++;
            
            if (luzMcDonalds[1].classList.contains('ativo') && contadorAmarelo >= fluxoAmarelo) {
                ligarSinalVermelhoMc();
                clearInterval(amareloInterval); 
            }
            //                
        }, 1000);           
    }    
    
    function ligarSinalVermelhoMc() {
        let contadorVermelho = 0;
        luzMcDonalds[1].classList.remove('ativo');
        luzMcDonalds[0].classList.add('ativo');
        
        
        let vermelhoInterval = setInterval(() => {
            contadorVermelho++;
            
            if (luzMcDonalds[0].classList.contains('ativo') && contadorVermelho >= fluxoVermelho) {
                luzMcDonalds[0].classList.remove('ativo');
                luzMcDonalds[2].classList.add('ativo');
                //
                ligarSemaforoMc('Eldorado');
                //
                clearInterval(vermelhoInterval);                            
            }                      
        }, 1000);
    }

    function iniciar() {
        carro.classList.add('carroAnimation');
        luzPlaza[0].classList.add('ativo');
        luzMcDonalds[0].classList.add('ativo');        
        ligarSemaforoElDorado();
        //
        setTimeout(() => {            
            ligarSemaforoPlaza();               
        }, tempoEntreSemarofoUmeDois * 1000);
        //
        setTimeout(() => {            
            ligarSemaforoMc();    
        }, tempoEntreSemarofoDoiseTres * 1000);            
    }

    function parar() {
        location.reload();            
    }