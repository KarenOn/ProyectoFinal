/*firebase.initializeApp({
    apiKey: "AIzaSyBXqYdSYDdYwC3OBdSIbXtlL7-fJ7pH288",
    authDomain: "crud-3d852.firebaseapp.com",
    projectId: "crud-3d852"
  });
  
  var db = firebase.firestore();
//Agregar datos
  function guardar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    db.collection("Eventos").add({
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Mensaje: mensaje
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Usted se registro al evento.");
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert('Ocurrio un error al agregar. Vuelve a intentarlo');
    });
  }

//Leer datos
var tabla = document.getElementById('tabla');
db.collection("Evento").onSnapshot((querySnapshot) => {
    document.getElementById('tabla').innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Nombre}`);
        document.getElementById('tabla').innerHTML += `
        <tr>
            <td>${doc.data().Nombre}</td>
            <td>${doc.data().Apellido}</td>
            <td>${doc.data().Email}</td>
            <td>${doc.data().Mensaje}</td>
            <td><button class="btn btn-outline-danger" onclick="eliminar('${doc.id}')"><i class="fas fa-trash-alt"></i></button></td>
            <td><button class="btn btn-outline-info" onclick="editar('${doc.id}', '${doc.data().Nombre}', '${doc.data().Apellido}', '${doc.data().Email}', '${doc.data().Mensaje}')"><i class="fas fa-pencil-alt"></i></button></td>
        </tr>
        `
    });
});

//Borrar datos
function eliminar(id)
{
    var opcion = confirm("¿Deseas eliminar este evento?");
    if(opcion == true)
    {
        db.collection("Evento").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        alert('Evento eliminado correctamente');
            
        }).catch(function(error) {
            console.error("Error removing document: ", error);
            alert("Ocurrio un error. Vuelve a intentarlo");
        });
    }
}

//Editar datos
function editar(id, nombre, apellido, email, mensaje)
{
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('email').value = email;
    document.getElementById('mensaje').value = mensaje;
    var button = document.getElementById('button');
    button.innerHTML = 'Editar';

    button.onclick = function()
    {
        var washingtonRef = db.collection("Evento").doc(id);
        // Set the "capital" field of the city 'DC'

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var edad = document.getElementById('email').value;
        var direccion = document.getElementById('mensaje').value;

        return washingtonRef.update({
            Nombre: nombre,
            Apellido: apellido,
            Email: email,
            Mensaje: mensaje
        })
        .then(function() {
            console.log("Document successfully updated!");
            alert('Evento editado correctamente');
            button.innerHTML = 'Guardar';
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensaje').value = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            alert('Hubo un error al editar. Vuelve a intentarlo');
        });
    }    
}*/
console.log('correcto');

document.querySelector('#button').addEventListener('click', mostrardatos);

function mostrardatos()
{
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'api.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';


            for(let item of datos)
            {
                //console.log(item.Nombre);
                res.innerHTML += `
                <tr>
                    <th>${item.Nombre}</th>
                    <th>${item.Apellido}</th>
                    <th>${item.Email}</th>
                    <th>${item.Evento}</th>
                </tr>
                `
            }
        }
    }
}