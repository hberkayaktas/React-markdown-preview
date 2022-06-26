      
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
    partialize.map((p_item,p_index)=>{
      //eğer sonda virgül varsa alma
      if(p_item.endsWith(",")){
        p_item = p_item.slice(0,-1)
      }
      //eğer yıldız ile başlayıp yıldız ile bitiyorsa
      if(p_item.startsWith("*") && p_item.endsWith("*") && p_item.length>3){
        //eğer 2.index de * ise
        if(p_item[1] == "*" && p_item[p_item.length-1] == "*"){
          //console.log("eşleşnewar:bold",partialize);
          newArr.push("<b>"+ p_item.slice(2,-2)+"</b>" )
        }else{
          //console.log("eşleşnewar:italik",partialize);
          //newArr.push("<i>"+ p_item.slice(1,-1)+"</i>" )
          let qİtem = "<i>"+ p_item.slice(1,-1)+"</i>";
          //newREg =new RegExp(p_item,"g");
          newArr.push(qİtem)
        }
      }

      // codyapısı mı ?
      if(p_item.startsWith("\`") && p_item.endsWith("\`") && p_item.length>3){
        newArr.push("<code>"+ p_item.slice(1,-1)+"</code>" )
      }
      // üstü çizilimi 
      if(p_item.startsWith("~~") && p_item.endsWith("~~") && p_item.length>3){
        newArr.push("<del>"+ p_item.slice(2,-2)+"</del>" )
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
