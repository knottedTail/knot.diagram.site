function showHide(div_id) {
    var x = document.getElementById(div_id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    return false;
}

function diagramPopup(url){
    var img=new Image();
    img.src=url;
    var img_width = 0;
    var img_height = 0;
    
    img.addEventListener('load', function() {
        img_width = this.naturalWidth;
        img_height = this.naturalHeight;

        var zoom = 3;
        var win_width=parseInt(zoom*img_width);
        var win_height=parseInt(zoom*img_height);
        // console.log(win_width);
        // console.log(win_height);
        var diagramPopup = window.open('', '_blank', 'width='+win_width+', height='+win_height+', scrollbars=auto');
        // var diagram_popup = window.open('','_blank','width='+img_width+',height='+height+',top='+top+',left='+left+',menubars=no,scrollbars=auto');
        diagramPopup.document.write("<style>body{margin:0px;}</style><a href = # onclick = window.close() onfocus=this.blur()><img src = '"+url+"'width='"+img_width+"'height='"+img_height+"'></a>");
        diagramPopup.document.body.style.zoom = zoom + "00%";           
    })

    return false;

    // var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
    // OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
}

// function diagramPopup(url){
//     var zoom = 3;
//     var img = new Image();
//     var scWidth = screen.availWidth; //현재 사용중인 스크린 크기를 구함
//     var scHeight = screen.availHeight;
//     var left = (parseInt(scWidth)-650)/2; //팝업창 위치 조절
//     var top = (parseInt(scHeight)-900)/2;
//     img.src = url;
//     img.
//     var img_width = zoom*img.width; //팝업창 크기 조절
//     var win_width = img.width-500;
//     console.log(img.width);
//     console.log(zoom);
//     console.log(img_width);
//     console.log(win_width);
//     var height = img.height-290;

//     var openImage = window.open('','_blank','width='+img_width+',height='+height+',top='+top+',left='+left+',menubars=no,scrollbars=auto');
//     openImage.document.write("<style>body{margin:0px;}</style><a href = # onclick = window.close() onfocus=this.blur()><img src = '"+url+"'width='"+win_width+"'></a>");
//     openImage.document.body.style.zoom=zoom+"00%";
//     return false;
//   }


// function diagramPopup(url){
//     var img = new Image();
//     var scWidth = screen.availWidth; //현재 사용중인 스크린 크기를 구함
//     var scHeight = screen.availHeight;
//     var left = (parseInt(scWidth)-650)/2; //팝업창 위치 조절
//     var top = (parseInt(scHeight)-900)/2;
//     img.src = url;
//     var img_width = img.width-500; //팝업창 크기 조절
//     var win_width = img.width-500;
//     var height = img.height-290;

//     var openImage = window.open('','_blank','width='+img_width+',height='+height+',top='+top+',left='+left+',menubars=no,scrollbars=auto');
//     openImage.document.write("<style>body{margin:0px;}</style><a href = # onclick = window.close() onfocus=this.blur()><img src = '"+url+"'width='"+win_width+"'></a>");
//     openImage.document.body.style.zoom="300%";
//     return false;
//   }

