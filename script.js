
    
    let armazenamentoDeClick = null;

    const stick1 = document.getElementById('stick1');
    const stick2 = document.getElementById('stick2');
    const stick3 = document.getElementById('stick3');
    const vitoria = document.getElementById('vitoria');

    stick1.addEventListener('click', handlerClick)
    stick2.addEventListener('click', handlerClick)
    stick3.addEventListener('click', handlerClick)

    function handlerClick(event) {
        console.log(event.currentTarget)
        if(armazenamentoDeClick === null){
    
            armazenamentoDeClick = (event.currentTarget.lastElementChild)
            armazenamentoDeClick.style.border = "3px solid white"
           
        }
        else if(event.currentTarget.childElementCount === 0){
            event.currentTarget.appendChild(armazenamentoDeClick)
            armazenamentoDeClick.style.border = "3px solid transparent"
                armazenamentoDeClick = null

        }
        else if (armazenamentoDeClick.clientWidth < event.currentTarget.lastElementChild.clientWidth){
            event.currentTarget.appendChild(armazenamentoDeClick)
            armazenamentoDeClick.style.border = "3px solid transparent"
            armazenamentoDeClick = null
        
                   
        }
        else if (armazenamentoDeClick.clientWidth > event.currentTarget.lastElementChild.clientWidth){
            armazenamentoDeClick.style.border = "3px solid transparent"
            armazenamentoDeClick = null
        
                   
        }
        if (stick3.childElementCount === 4) {
            return vitoria.innerText = 'Parabéns, você ganhou!'

        }

        
        }


