      
export  function duzenle(text) {
  let kalici_degisken =0;
  var sonuc = text.split("\n");
  var newArr = [];
   sonuc.map((item, index) => {
    // filtreleme sayacı 
    let filtre = 0;
   

    // satır içi düzenlemeleri
    let partialize = item.split(" ",);
    //console.log(partialize)
    partialize.map((p_item,p_index,Con_arr)=>{
      //eğer sonda virgül varsa alma
      if(p_item.endsWith(",")){
        p_item = p_item.slice(0,-1)
      }
      
      
      //eğer yıldız ile başlayıp yıldız ile bitiyorsa
      if(p_item.startsWith("*") && p_item.endsWith("*") && p_item.length>3){
        filtre++;
        //eğer 2.index de * ise
        if(p_item[1] == "*" && p_item[p_item.length-1] == "*"){
          //console.log("eşleşnewar:bold",partialize);
          let qİtem  = "<b>"+ p_item.slice(2,-2)+"</b>" ;
          partialize[p_index] = qİtem;
        }else{
          //console.log("eşleşnewar:italik",partialize);
          //newArr.push("<i>"+ p_item.slice(1,-1)+"</i>" )
          let qİtem = "<i>"+ p_item.slice(1,-1)+"</i>";
         
          //var reg = new RegExp(p_item,"gi");
          //console.log(item.slice(p_index,p_item.length),p_index,p_item.length);
          partialize[p_index] = qİtem;
        }
        //console.log(p_item)
        console.log(Con_arr.toString().replace(/,/gi," "))
        if(Con_arr.length == (p_index+1)){

          newArr.push("<p>"+Con_arr.toString().replace(/,/gi," ") +"</p>")
        }
      }

      // codyapısı mı ?
      else if(p_item.startsWith("\`") && p_item.endsWith("\`") && p_item.length>3){
        newArr.push("<code>"+ p_item.slice(1,-1)+"</code>" )
        filtre++;
      }
      // üstü çizilimi 
      else if(p_item.startsWith("~~") && p_item.endsWith("~~") && p_item.length>3){
        newArr.push("<del>"+ p_item.slice(2,-2)+"</del>" );
        filtre++;
      }
    })
    // hash başlıklar
    if(item.startsWith("###")){
      newArr.push("<h3>"+item.slice(3,)+"</h3>");
      filtre++;
    }
    

    // UL algoritması
    if (item.startsWith("*")) {
      if (!sonuc[index - 1].startsWith("*")) {
        newArr.push("<ul><li>" + item.slice(1,) + "</li>");
      } 
      if(sonuc[index - 1].startsWith("*") && sonuc[index + 1].startsWith("*")){
        newArr.push("<li>" + item.slice(1,) + "</li>");
      }
      if(!sonuc[index + 1].startsWith("*")){
        newArr.push("<li>" + item.slice(1,) + "</li></ul>");
      }
      filtre++;
    }

    // Ol algoritması
    let trimlenmis = item.trim();
    //console.log(trimlenmis);
    const numberS = new RegExp("^[0-9]");
    if (numberS.test(trimlenmis)) {

      if (!numberS.test(sonuc[index-1].trim())) {
        newArr.push("<ol><li>" + item.slice(5,) + "</li>");
      } 
      if(numberS.test(sonuc[index-1].trim()) && numberS.test(sonuc[index+1].trim())){
        newArr.push("<li>" + item.slice(5,) + "</li>");
      }
      if(!numberS.test(sonuc[index+1].trim())){
        newArr.push("<li>" + item.slice(5,) + "</li></ol>");
      }
      filtre++;
    }
    // Link Kontrolü
    if(trimlenmis.startsWith("*[") && trimlenmis.endsWith(")*")){
      let link = trimlenmis.split("]");
      //console.log(link);
      newArr.push(`<a href="${link[1].slice(1,-2)}">${link[0].slice(2,)}</a>`)
      filtre++;
    }
   
     // eğer main başlıksa
    var newR = /=/;
    var newR2 = /[A-Z]/gi;
    if(newR.test(sonuc[index+1]) && !newR2.test(sonuc[index+1])){
      //console.log(sonuc[index+1])
      newArr.push("<h1>"+ item + "</h1>");
      filtre++;
      kalici_degisken++;
    }
    if(item.startsWith("==") || item.startsWith("--")){
      filtre++;
    }
    
    //if(item.startsWith("==")){
     // newArr.push("<h1>"+ sonuc[index-1] + "</h1>");
     // filtre++;
    // }
    var newR3 = /-/;
    // eğer sub başlıksa
    if(newR3.test(sonuc[index+1]) && !newR2.test(sonuc[index+1])){
      newArr.push("<h2>"+ item + "</h2>");
      //console.log(sonuc[index+1])
      filtre++;
      kalici_degisken++;
    }
    if(filtre == 0 && item != ""){
      newArr.push("<p>"+item+"</p>")           
    }

    //console.log(filtre,kalici_degisken);
  });
 // console.log(sonuc);
 // console.log(newArr);
  return newArr;
}
