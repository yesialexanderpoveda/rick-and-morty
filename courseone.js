    cont=1;
    contFiltro=1;
    url = "https://rickandmortyapi.com/api/character/?page="; 
       document.querySelector("#siguiente").addEventListener("click", function(){
            if(cont<34){
             cont++;
             console.log(cont);
             pintar();
            }
        });
       document.querySelector("#anterior").addEventListener("click", function(){
            if(cont>1){
            cont--;
            console.log(cont)
            pintar();
            }
        });
        function pintar(){
         const xhr = new XMLHttpRequest(),
         $xhr = document.querySelector("#xhr")
            xhr.addEventListener("readystatechange", (e)=>{ 

                if(xhr.readyState!==4)return;  
                if(xhr.status>=200 && xhr.status < 300){    
                   console.log("exito");
                        dele();
                   let json = JSON.parse(xhr.responseText); 
                   json.results.forEach((el)=>{
                       $xhr.innerHTML += `<div class="pintar"><p>${el.name}</p><p>${el.status}</p><p>${el.species}</p><p>${el.gender}</p><img src="${el.image}"/></div>`;
                   });
    
                }else{
                 console.log("error");
                }
            });
            if(contFiltro>1){
                contFiltro=1;
                 document.querySelector("#filtrar").onkeypress = function(){filtrando()};
                 function filtrando(){
                    valores = document.querySelector("#filtrar").value;
                    xhr.open("GET", "https://rickandmortyapi.com/api/character/?name=" + valores);
                    xhr.send(null);

                 }
               
                
            }else{
         xhr.open("GET", url + cont);
         xhr.send(null);
            }
        }
        
    pintar();
    
         function dele (){
            $xhr = document.querySelector("#xhr")
            $xhr.innerHTML ="";  
            console.log("hola delete")
         }

     document.querySelector('#filtrar').addEventListener('click', function(){
            contFiltro++;
            console.log("funcionando" + contFiltro);
            pintar();

     });