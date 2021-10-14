//CLIENTE DATA
function traerInformacionCliente(){
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta2){
            console.log(respuesta2);
            pintarRespuestaCliente(respuesta2.items)
        }

    });
}

function pintarRespuestaCliente(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);
}

function agregarInfoCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),  
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Dato guardado")
        }
    });
}

function actualizarInfoCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Dato actualizado")
        }
    });
}

function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultadoCliente").empty();
            traerInformacionCliente();
            alert("Dato borrado")
        }
    });
}