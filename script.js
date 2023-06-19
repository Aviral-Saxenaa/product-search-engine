console.log("hello");

(function func(){
        const inputtext=document.querySelector("#search");

        inputtext.addEventListener("keyup",function(){
                const filter=inputtext.value.toLocaleUpperCase();
                console.log(filter);
                const items=document.querySelectorAll(".items");

                items.forEach(function(item){
                        const itemdesc=item.querySelector(".item-desc");
                        const itemdesch3=itemdesc.getElementsByTagName("h3")[0];
                        
                        if(itemdesch3){
                                const insideele=itemdesch3.innerHTML.toLocaleUpperCase();
                                if(insideele.indexOf(filter)>-1){
                                        item.style.display="";
                                }
                                else{
                                        item.style.display="none";
                                }
                        }
                })

        })
        


})();


       