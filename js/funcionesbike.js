
//DATA BICICLETA
function traerInformacionBicicleta() {
    $.ajax(
        {
            url: "https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
            type: "GET",
            datatype: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                pintarRespuestaBicicleta(respuesta.items);
            }
        }
    );
}

function pintarRespuestaBicicleta(items) {
    let myTable = "<table>";
    for (i= 0; i < items.length; i++) {
        myTable+="<tr>";
        myTable+= "<td>"+items[i].id+"</id>";
        myTable+= "<td>"+items[i].brand+"</id>";
        myTable+= "<td>"+items[i].model+"</id>";
        myTable+= "<td>"+items[i].category_id+"</id>";
        myTable+= "<td>"+items[i].name+"</id>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+= "</tr>";
    }
    myTable+="</table>";
    $("#resultadoBicicleta").append(myTable);
}

function agregarInfoBicicleta(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success:function(respuesta){
            $("#resultadoBicicleta").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionBicicleta();
            alert("Dato guardado")
        }
    });
}


function actualizarInfoBicicleta(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoBicicleta").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionBicicleta();
            alert("Dato actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ge0743c1d2df740-dbbicicleta.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoBicicleta").empty();
            traerInformacionBicicleta();
            alert("Dato borrado")
        }
    });
}
