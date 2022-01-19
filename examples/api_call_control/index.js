
(function(ns, fetch) {
    if (typeof fetch !== 'function') return;
    
    const netDiv = document.getElementById("netDiv");
    window.apiCallNum = 0;

    ns.fetch = function() {
        var out = fetch.apply(this, arguments);
        const url = arguments[0];
        if(url.includes("https://api.dailymotion.com/videos?")){
            out.then(response1 => {
                var response2 = response1.clone();
                
                    append(url,"main");
                    response2.json().then((obj)=> {
                        if(obj.list.length > 0){
                            append("<b>keywords: </b>"+(getInfo(url,"search"))+
                                    "<br><b>sort: </b>"+(getInfo(url,"sort"))+
                                    "<br><b>API Response : </b>"+ JSON.stringify(obj.list[0]))
                        }else{
                            append(
                                "<b>keywords: </b>"+(getInfo(url,"search"))+
                                "<br><b>sort: </b>"+(getInfo(url,"sort"))+
                                "<br><b>API Response :</b> no-video"
                            )
                        }
                    })
            });

        }
        

        return out;
    }

    function append(info,main){
        const div = document.createElement("div");
        div.className = "api-call";
        if(main){
            window.apiCallNum ++;
            div.innerHTML = "<div class='api-number'>"+window.apiCallNum+"</div>"+info
        }else{
            div.innerHTML = info;
        }
        netDiv.appendChild(div);
        netDiv.scrollTop = netDiv.scrollHeight;
    }
    function getInfo(url,key){
        let search = (new URL(url)).search.split("&");
        let string = "";
        search.forEach((val)=>{
            if(val.includes(key)){
                string = val.replace(key+"=","");
            } 
        });
        return decodeURI(string);
    }

}(window, window.fetch))