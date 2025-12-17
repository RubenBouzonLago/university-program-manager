class Gestion_publicacion extends GestionEntidad{
    
    // se puede hacer uno general en GestionEntidad que recorra todos los atributos haciendo estas cosas
    static resetearformpublicacion() {

        GestionEntidad.resetearForm();
    
    }


    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    CREACIÓN DE FORMULARIOS                                                                      
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */

    
    static async createForm_ADD(){

        // resetear el formulario
        // hemos hecho una modificación de manera que cargamos el contenido del formulario desde su html cada vez que lo preparamos para una accion
        // obviamente es dependiente de la entidad y por lo tanto no esta en la superclase
        this.recargarform();

        // rellenar titulo formulario
        // usamos className mientras no tenemos que utilizar clases de css puesto que borra todos los class del elemento
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_publicacion"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').style.display = 'none';
        document.getElementById('label_id_publicacion').style.display = 'none';

        // se coloca el onblur del titulo y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');

        document.getElementById('fecha_publicacion').setAttribute('onchange', 'Gestion_publicacion.comprobar_fecha_publicacion()');

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion()');

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion()');

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        document.getElementById("label_imagen_publicacion").style.display = 'none';
        document.getElementById("imagen_publicacion").style.display = 'none';
        document.getElementById("link_imagen_publicacion").style.display = 'none';


        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);        

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static createForm_EDIT(datostupla){
        
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_publicacion"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_EDIT();');

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute("readonly","");

        // se coloca el onblur del titulo y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;

        document.getElementById('fecha_publicacion').setAttribute('onchange','Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;

        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = datostupla.area_publicacion;

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('link_imagen_publicacion').href += datostupla.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_DELETE(datostupla){
        
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute('readonly',true);

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;
        document.getElementById('titulo_publicacion').setAttribute('readonly',true);

        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;
        document.getElementById('autor_publicacion').setAttribute('readonly',true);

        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;
        document.getElementById('fecha_publicacion').setAttribute('readonly',true);

        document.getElementById('area_publicacion').value = datostupla.area_publicacion;
        document.getElementById('area_publicacion').setAttribute('readonly',true);

        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;
        document.getElementById('texto_publicacion').setAttribute('readonly',true);

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);
        document.getElementById("link_imagen_publicacion").href += datostupla.imagen_publicacion;

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
        

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_SHOWCURRENT(datostupla){
        
        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datostupla);
        
        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_publicacion";

        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
        
        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();


    }

    static createForm_SEARCH(){

        // resetear el formulario
        this.recargarform();
        
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');

        // se coloca el onblur del id_publicacion y se pone a vacio el valor (o podriamos hacerlo en el resetear formusuario)
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion_SEARCH()');

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetear formusuario
        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');

        document.getElementById('fecha_publicacion').setAttribute('onchange','Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');
        
        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion_SEARCH()');

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');
        
        document.getElementById('imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_imagen_publicacion_SEARCH()');

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById('link_imagen_publicacion').style.display = 'none';

        
        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        

        // para actualizar idioma
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }


    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                        SUBMITS                                                                     
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */


    static comprobar_submit(){

        //let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion();

        let resultado = (
            //valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6
        );

        return resultado;
    }

    static comprobar_submit_EDIT(){

        //let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion_EDIT();

        let resultado = (
            //valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6
        );

        return resultado;
    }

    static comprobar_submit_SEARCH(){

        let valor = this.comprobar_id_publicacion_SEARCH();
        let valor1 = this.comprobar_titulo_publicacion_SEARCH();
        let valor2 = this.comprobar_autor_publicacion_SEARCH();
        let valor3 = this.comprobar_fecha_publicacion_SEARCH();
        let valor4 = this.comprobar_area_publicacion_SEARCH();
        let valor5 = this.comprobar_texto_publicacion_SEARCH();
        let valor6 = this.comprobar_imagen_publicacion_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );
    
        return resultado;
    }

    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    ACCIONES A BACK                                                                      
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */


    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
        .then((respuesta) => {
            //this.resetearformpublicacion();
            this.recargarform();
            let publicacion = new Gestion_publicacion('publicacion',respuesta['resource'],Array('id_publicacion','titulo_publicacion',/*'autor_publicacion',*/'fecha_publicacion'/*,
                                                                                                'area_publicacion','texto_publicacion','imagen_publicacion'*/));
            publicacion.mostrartabla();

            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }


    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    VALIDACIONES DE CAMPOS                                                                      
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */


    // id_publicacion
    static comprobar_id_publicacion(){

        if (validacionesatomicas.nulo('id_publicacion')){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_nulo');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_minimo('id_publicacion',1)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_min');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_maximo('id_publicacion',6)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('id_publicacion',['[0-9]*'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('id_publicacion');
        return true;

    }

    // titulo_publicacion
    static comprobar_titulo_publicacion(){
            
        if (validacionesatomicas.nulo('titulo_publicacion')){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_nulo');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_minimo('titulo_publicacion',6)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_min');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_maximo('titulo_publicacion',80)){   
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('titulo_publicacion',['a-zA-ZáéíóúÁÉÍÓÚ ñ'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }

    // autor_publicacion
    static comprobar_autor_publicacion() {

        if (validacionesatomicas.nulo('autor_publicacion')){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_nulo');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_minimo('autor_publicacion',6)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_min');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_maximo('autor_publicacion',40)){   
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('autor_publicacion',['a-zA-ZáéíóúÁÉÍÓÚ ñ'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }

    // fecha_publicacion
    static comprobar_fecha_publicacion() {

        if (validacionesatomicas.nulo('fecha_publicacion')){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_nulo');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato2('fecha_publicacion',/[0-9]*\/*/)){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_formato2');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('fecha_publicacion',['[0-9]{4}-[0-9]{2}-[0-9]{2}'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    // area_publicacion
    static comprobar_area_publicacion() {

        if (validacionesatomicas.nulo('area_publicacion')){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_nulo');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_minimo('area_publicacion',1)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_min');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_maximo('area_publicacion',6)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('area_publicacion',['[0-9]*'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }

    // texto_publicacion
    static comprobar_texto_publicacion() {

        if (validacionesatomicas.nulo('texto_publicacion')){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_nulo');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_minimo('texto_publicacion',30)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_min');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.size_maximo('texto_publicacion',8000)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    // imagen_publicacion
    static comprobar_imagen_publicacion(){

        if (validacionesatomicas.nulo('imagen_publicacion')){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_nulo');
             //salir ejecucion con false
             return false;
         }
    
         if (validacionesatomicas.size_minimo('imagen_publicacion',7)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_min');
             //salir ejecucion con false
             return false;
         }
    
         if (validacionesatomicas.size_maximo('imagen_publicacion',60)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_max');
             //salir ejecucion con false
             return false;
         }
    
         if (validacionesatomicas.formato('imagen_publicacion',['[a-zA-Z.]*'])){       
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_formato');
             //salir ejecucion con false
             return false;
         }
    
         DOM_class.mostrarexitovalor('imagen_publicacion');
         return true;
    }

    static comprobar_nuevo_imagen_publicacion() {

        let imagen = document.getElementById('nuevo_imagen_publicacion');

        if (imagen.files[0]) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_nulo');
            //salir ejecucion con false
            return false;
        }

        if (imagen.files[0].name.length >= 7) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (imagen.files[0].name.length <= 60) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        let expr = /^[a-zA-Z]*.(jpg|jpeg)$/;
        if (expr.test(imagen.files[0].name)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_formato');
            //salir ejecucion con false
            return false;
        }

        if (imagen.files[0].size <= 2000000) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_tam_bytes');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;

    }

    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    VALIDACIONES DE CAMPOS SEARCH                                                                     
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */
    
    // id_publicacion_SEARCH
    static comprobar_id_publicacion_SEARCH(){


        if (validacionesatomicas.size_maximo('id_publicacion',6)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }
        if (validacionesatomicas.formato('id_publicacion',['[0-9]*'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('id_publicacion');
        return true;

    }

    // titulo_publicacion_SEARCH
    static comprobar_titulo_publicacion_SEARCH(){
       
        if (validacionesatomicas.size_maximo('titulo_publicacion',80)){   
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('titulo_publicacion',['a-zA-ZáéíóúÁÉÍÓÚ ñ'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }

    // autor_publicacion_SEARCH
    static comprobar_autor_publicacion_SEARCH() {
            
        if (validacionesatomicas.size_maximo('autor_publicacion',40)){   
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('autor_publicacion',['a-zA-ZáéíóúÁÉÍÓÚ ñ'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }

    // fecha_publicacion_SEARCH
    static comprobar_fecha_publicacion_SEARCH() {
        /*
        if (validacionesatomicas.formato('fecha_publicacion',['[0-9]*\/'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_formato1');
        //salir ejecucion con false
        return false;
        }*/

        if (!validacionesatomicas.nulo('fecha_publicacion') || validacionesatomicas.formato('fecha_publicacion',['[0-9]{4}-[0-9]{2}-[0-9]{2}'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_formato2');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    // area_publicacion_SEARCH
    static comprobar_area_publicacion_SEARCH() {
            
        if (validacionesatomicas.size_maximo('area_publicacion',6)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        if (validacionesatomicas.formato('area_publicacion',['[0-9]*'])){       
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_formato');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }

    // texto_publicacion_SEARCH
    static comprobar_texto_publicacion_SEARCH() {
                
        if (validacionesatomicas.size_maximo('texto_publicacion',8000)){
        }
        else{
        //modificacion parametros texto error
        DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_tam_max');
        //salir ejecucion con false
        return false;
        }

        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    // imagen_publicacion_SEARCH
    static comprobar_imagen_publicacion_SEARCH() {
                
        if (validacionesatomicas.size_maximo('imagen_publicacion',60)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.formato('imagen_publicacion',['[a-zA-Z.]*'])){       
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion','KO_imagen_publicacion_formato');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('imagen_publicacion');
        return true;
    }

    // nuevo_imagen_publicacion_SEARCH
    static comprobar_nuevo_imagen_publicacion_EDIT() {

        let imagen = document.getElementById('nuevo_imagen_publicacion');

        if (imagen.files[0]) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
            //salir ejecucion con false
            return true;
        }

        if (imagen.files[0].name.length >= 7) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (imagen.files[0].name.length <= 60) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        let expr = /^[a-zA-Z]*.(jpg|jpeg)$/;
        if (expr.test(imagen.files[0].name)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_formato');
            //salir ejecucion con false
            return false;
        }

        if (imagen.files[0].size <= 20000) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion', 'KO_nuevo_imagen_publicacion_tam_bytes');
            //salir ejecucion con false
            return false;
        }
        
        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;
    }

    static recargarform(){

        document.getElementById("IU_form").removeAttribute("onsubmit");

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        (Los campos con * son obligatorios)
        <br>
        <label id="label_id_publicacion" class="label_id_publicacion">ID de la publicación</label>
        <input type="text" id="id_publicacion" name="id_publicacion"></input>
        <div id="div_error_id_publicacion" class="errorcampo"><a id="error_id_publicacion"></a></div>
        <br>
        
        <label class="label_titulo_publicacion">Título de la publicación</label>
        <input type="text" id="titulo_publicacion" name="titulo_publicacion"></input> *
        <div id="div_error_titulo_publicacion" class="errorcampo"><a id="error_titulo_publicacion"></a></div>
        <br>

        <label class="label_autor_publicacion">Autor de la publicación</label>
        <input type="text" id="autor_publicacion" name="autor_publicacion"></input> *
        <div id="div_error_autor_publicacion" class="errorcampo"><a id="error_autor_publicacion"></a></div>
        <br>

        <label class="label_fecha_publicacion">Fecha de la publicación</label>
        <input type='date' id='fecha_publicacion' name='fecha_publicacion'></input> *
        <div id="div_error_fecha_publicacion" class="errorcampo"><a id="error_fecha_publicacion"></a></div>
        <br>

        <label class="label_area_publicacion">Área de la publicación</label>
        <input type="text" id="area_publicacion" name="area_publicacion"></input> *
        <div id="div_error_area_publicacion" class="errorcampo"><a id="error_area_publicacion"></a></div>
        <br>

        <label class="label_texto_publicacion">Texto de la publicación</label>
        <textarea type="text" id="texto_publicacion" name="texto_publicacion"></textarea> *
        <div id="div_error_texto_publicacion" class="errorcampo"><a id="error_texto_publicacion"></a></div>
        <br>
        
        <br>
        <label id="label_imagen_publicacion" class="label_imagen_publicacion">Imagen publicación</label>
        <input type='text' id='imagen_publicacion' name='imagen_publicacion'></input>
        <a id="link_imagen_publicacion" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/"><img src="./iconos/FILE.png" /></a>

        <label id="label_nuevo_imagen_publicacion" class="label_nuevo_imagen_publicacion">Nueva Imagen publicación</label>
        <input type='file' id='nuevo_imagen_publicacion' name='nuevo_imagen_publicacion'></input> *
        <div id="div_error_imagen_publicacion" class="errorcampo"><a id="error_nuevo_imagen_publicacion"></a></div>
        <br>
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

        setLang();

       
    }
}