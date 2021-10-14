function traerInformacionMensaje(){
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta3){
            console.log(respuesta3);
            pintarRespuestaMensaje(respuesta3.items);
        }

    });
}

function pintarRespuestaMensaje(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensaje").append(myTable);

}

function agregarInfoMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultadoMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Dato guardado")
        }
    });
}


function actualizarInfoMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultadoMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMensaje();
            alert("Dato actualizado")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultadoMensaje").empty();
            traerInformacionMensaje();
            alert("Dato borrado")
        }
    });
}