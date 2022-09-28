$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text:"Usuario",
              key: "User"
          },
          {
              text: "Edad",
              key: "age"
          },
          {
              text: "Género",
              key: "gender"
          },
          {
              text: "País",
              key: "pais"
          },        
          {
            text: "contraseña",
            key: "password"
        }, 
        ],
 
        //carga de datos
        data: [{
            User: 'Francisco',
            age: 18,
            gender: 'M',
            pais: 'Mexico',
            password: '2306'    
        },
        {
            User: 'Jorge',
            age: 18,
            gender: 'M',
            pais: 'Mexico',
            password: '1203'
        },
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});  