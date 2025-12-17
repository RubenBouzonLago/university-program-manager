let textos_ES={

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'', // action realizada con exito
    'SQL_KO':'', // action falla en la operacion en la bd
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'dni_es_nulo_KO':'No se ha enviado el dni',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'controlador_invalido':'', // no se envia la entidad
    'action_invalido':'', // no se envia la accion


    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    MENSAJES PROGRAMA                                                                      
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */

    // atributos programa (usados en el titulo de la tabla de presentación de datos)

    'id_programa':'Identificación Programa',
    'nombre_programa':'Nombre Programa',
    'acronimo_programa':'Acrónimo Programa',
    'nombre_original_programa':'Nombre Original',
    'autor_programa':'Autor Programa',
    'autor_original_programa':'Autor Original',
    'ano_programa':'Año Programa',
    'ano_original_programa':'Año Original',
    'requisitos_programa':'Requisitos Programa',
    'poblacion_desde_programa':'Pobl. Desde Programa',
    'poblacion_hasta_programa':'Pobl. Hasta Programa',
    'unidad_poblacion':'Unidad Población',
    'tipo_programa':'Tipo Programa',
    'tiempo_aplicacion_programa':'Tiempo apl. Programa',
    'descrip_interp_programa':'Descripción Programa',
    'fichero_programa':'Fichero Programa',
    'enlace_programa':'Enlace Programa',
    'formato_programa':'Formato Programa',
    'modo_correccion_programa':'Modo Corrección Programa',
    'modo_aplicacion_programa':'Modo Aplicación Programa',
    'imagen_programa':'Imagen Programa',

    // label atributos programa

    'label_id_programa':'Introduzca el Id : ',
    'label_nombre_programa':'Introduzca el Nombre : ',
    'label_acronimo_programa':'Introduzca el Acrónimo : ',
    'label_nombre_original_programa':'Introduzca el Nombre Original : ',
    'label_autor_programa':'Introduzca el Autor : ',
    'label_autor_original_programa':'Introduzca el Autor Original : ',
    'label_ano_programa':'Introduzca el Año : ',
    'label_ano_original_programa':'Introduzca el Año Original : ',
    'label_requisitos_programa':'Introduzca los Requisitos : ',
    'label_poblacion_desde_programa':'Introduzca la Población Desde : ',
    'label_poblacion_hasta_programa':'Introduzca la Población Hasta : ',
    'label_unidad_poblacion':'Introduzca la Unidad de Población : ',
    'label_tipo_programa':'Introduzca el Tipo de Programa : ',
    'label_tiempo_aplicacion_programa':'Introduzca el Tiempo de Aplicación : ',
    'label_descrip_interp_programa':'Introduzca la Descr. e Interpr. : ',
    'label_fichero_programa':'Introduzca el Fichero del Programa : ',
    'label_enlace_programa':'Introduzca el Enlace : ',
    'label_formato_programa':'Introduzca el Formato : ',
    'label_modo_correccion_programa':'Introduzca el Modo de Corrección : ',
    'label_modo_aplicacion_programa':'Introduzca el Modo de Aplicación : ',
    'label_imagen_programa':'Introduzca la Imagen del Programa',

    // titulo general pagina programas
        
    'titulo_pagina_programa':'Gestión de Programas',

    // titulos formularios acciones programa

    "titulo_form_ADD_programa":"Incorporar un programa",
    "titulo_form_EDIT_programa":"Modificar un programa",
    "titulo_form_DELETE_programa":"Confirmar borrar un programa",
    "titulo_form_SEARCH_programa":"Buscar un programa",
    "titulo_form_SHOWCURRENT_programa":"Ver detalle de un programa",

    // errores de formato de programa en front

    // id_programa
    "KO_id_programa_nulo":"El campo ID del Programa no puede estar vacío",
    "KO_id_programa_tam_min":"El campo ID del Programa no puede estar vacío",
    "KO_id_programa_tam_max":"El ID del Programa debe contener un máximo de 6 caracteres",
    "KO_id_programa_formato":"El ID del Programa contiene caracteres no válidos (solo se permiten numéricos)",
    
    // nombre_programa
    "KO_nombre_programa_nulo":"El campo Nombre del Programa no puede estar vacío",
    "KO_nombre_programa_tam_min":"El Nombre del Programa debe contener un mínimo de 6 caracteres",
    "KO_nombre_programa_tam_max":"El Nombre del Programa debe contener un máximo de 60 caracteres",
    "KO_nombre_programa_formato":"El Nombre del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)",

    // acronimo_programa
    "KO_acronimo_programa_nulo":"El campo Acrónimo del Programa no puede estar vacío",
    "KO_acronimo_programa_tam_min":"El Acrónimo del Programa debe contener un mínimo de 3 caracteres",
    "KO_acronimo_programa_tam_max":"El Acrónimo del Programa debe contener un máximo de 20 caracteres",
    "KO_acronimo_programa_formato":"El Acrónimo del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos sin acento y sin espacios)",

    // nombre_original_programa
    "KO_nombre_original_programa_nulo":"El campo Nombre Original del Programa no puede estar vacío",
    "KO_nombre_original_programa_tam_min":"El Nombre Original del Programa debe contener un mínimo de 6 caracteres",
    "KO_nombre_original_programa_tam_max":"El Nombre Original del Programa debe contener un máximo de 60 caracteres",
    "KO_nombre_original_programa_formato":"El Nombre Original del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)",

    // autor_programa
    "KO_autor_programa_nulo":"El campo Autor del Programa no puede estar vacío",
    "KO_autor_programa_tam_min":"El Autor del Programa debe contener un mínimo de 6 caracteres",
    "KO_autor_programa_tam_max":"El Autor del Programa debe contener un máximo de 50 caracteres",
    "KO_autor_programa_formato":"El Autor del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)",

    // autor_original_programa
    "KO_autor_original_programa_nulo":"El campo Autor Original del Programa no puede estar vacío",
    "KO_autor_original_programa_tam_min":"El Autor Original del Programa debe contener un mínimo de 6 caracteres",
    "KO_autor_original_programa_tam_max":"El Autor Original del Programa debe contener un máximo de 50 caracteres",
    "KO_autor_original_programa_formato":"El Autor Original del Programa contiene carcteres no válidos (solo se permiten carcteres alfabéticos, alfabéticos con acento, espacio y ñ)",

    // ano_programa
    "KO_ano_programa_nulo":"El campo Año del Programa no puede estar vacío",
    "KO_ano_programa_tam_igual":"El Año del Programa debe contener exactamente 4 digitos",
    "KO_ano_programa_formato":"El Año del Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)",
    "KO_ano_programa_actual":"El Año del Programa no puede ser posterior al Año actual",

    // ano_original_programa
    "KO_ano_original_programa_nulo":"El campo Año Original del Programa no puede estar vacío",
    "KO_ano_original_programa_tam_igual":"El Año Original del Programa debe contener exactamente 4 digitos",
    "KO_ano_original_programa_formato":"El Año Original del Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)",
    "KO_ano_original_programa_actual":"El Año Original del Programa no puede ser posterior al Año actual",

    // requisitos_programa
    "KO_requisitos_programa_nulo":"El campo Requisitos del Programa no puede estar vacío",
    "KO_requisitos_programa_tam_min":"Los Requisitos del Programa deben contener un mínimo de 6 caracteres",
    "KO_requisitos_programa_tam_max":"Los Requisitos del Programa deben contener un máximo de 300 caracteres",
    "KO_requisitos_programa_formato":"Los Requisitos del Programa contienen caracteres no válidos (solo se permiten caracteres alfabeticos, alfabeticos con acento, signos de puntuación, ñ y espacios)",

    // poblacion_desde_programa
    "KO_poblacion_desde_programa_tam_min":"El campo Población desde Programa no puede estar vacío",
    "KO_poblacion_desde_programa_tam_max":"Población desde Programa debe contener un máximo de 2 dígitos",
    "KO_poblacion_desde_programa_formato":"Población desde Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)",

    // poblacion_hasta_programa
    "KO_poblacion_hasta_programa_tam_min":"El campo Población hasta Programa no puede estar vacío",
    "KO_poblacion_hasta_programa_tam_max":"Población hasta Programa debe contener un máximo de 2 dígitos",
    "KO_poblacion_hasta_programa_formato":"Población hasta Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)",

    // unidad_poblacion
    "KO_unidad_poblacion_nulo":"El campo Unidad Población no puede estar vacío",
    //"KO_unidad_poblacion_tam_min":"",
    //"KO_unidad_poblacion_tam_max":"",
    "KO_unidad_poblacion_valores_enum":"Unidad de Población contiene valores no válidos (solo se permiten los valores MESES o AÑOS)",

    // tipo_programa
    "KO_tipo_programa_nulo":"El campo Tipo de Programa no puede estar vacío",
    //"KO_tipo_programa_tam_min":"",
    //"KO_tipo_programa_tam_max":"",
    "KO_tipo_programa_valores_enum":"Tipo de Programa contiene valores no válidos (solo se permiten los valores EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN)",

    // tiempo_aplicacion_programa
    "KO_tiempo_aplicacion_programa_tam_min":"El campo Tiempo de Apliación de Programa no puede estar vacío",
    "KO_tiempo_aplicacion_programa_tam_max":"Tiempo de Aplicación de Programa debe contener un máximo de 4 dígitos",
    "KO_tiempo_aplicacion_programa_formato":"Tiempo de Aplicación de Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)",

    // descrip_interp_programa
    "KO_descrip_interp_programa_nulo":"El campo Descripción e Interpretación del Programa no puede estar vacío",
    "KO_descrip_interp_programa_tam_min":"La Descripción e Interpretación del Programa debe contener un mínimo de 100 caracteres",
    "KO_descrip_interp_programa_tam_max":"La Descripción e Interpretación del Programa debe contener un máximo de 5000 caracteres",
    "KO_descrip_interp_programa_formato":"Descripción e Interpretación del Programa contiene caracteres no válidos (solo se permiten caracteres alfabeticos, alfabeticos con acento, signos de puntuación, retornos de carro, ñ y espacios)",

    // fichero_programa
    "KO_fichero_programa_nulo":"El campo Fichero Programa no puede estar vacío",
    "KO_fichero_programa_tam_min":"El nombre del Fichero del Programa debe contener un mínimo de 7 caracteres",
    "KO_fichero_programa_tam_max":"El nombre del Fichero del Programa debe contener un máximo de 60 caracteres",
    "KO_fichero_programa_formato":"El nombre del Fichero del Programa contiene carcteres no válidos (solo se permiten archivos .pdf, .doc o .docx cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)",

    // nuevo_fichero_programa
    "KO_nuevo_fichero_programa_nulo":"El campo Fichero Programa no puede estar vacío",
    "KO_nuevo_fichero_programa_tam_min":"El Fichero del Programa debe contener un mínimo de 7 caracteres",
    "KO_nuevo_fichero_programa_tam_max":"El Fichero del Programa debe contener un máximo de 60 caracteres",
    "KO_nuevo_fichero_programa_formato":"El Fichero del Programa no es válido (solo se permiten archivos .pdf, .doc o .docx cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)",
    "KO_nuevo_fichero_programa_tam_bytes":"El Fichero del Programa debe pesar un máximo de 2000000 bytes",

    // enlace_programa
    "KO_enlace_programa_nulo":"El campo Enlace Programa no puede estar vacío",
    "KO_enlace_programa_tam_min":"El Enlace del Programa debe contener un mínimo de 10 caracteres",
    "KO_enlace_programa_tam_max":"El Enlace del Programa debe contener un máximo de 100 caracteres",
    "KO_enlace_programa_formato":"El Enlace del Programa contiene caracteres no válidos (solo se permiten carcteres alfabéticos y : y / y . sin acentos ni ñ ni espacios)",

    // formato_programa
    "KO_formato_programa_nulo":"El campo Formato de Programa no puede estar vacío",
    //"KO_formato_programa_tam_min":"",
    //"KO_formato_programa_tam_max":"",
    "KO_formato_programa_valores_enum":"Formato de Programa contiene valores no válidos (solo se permiten los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO)",

    // modo_correccion_programa
    "KO_modo_correccion_programa_nulo":"El campo Modo de Corrección del Programa no puede estar vacío",
    //"KO_modo_correccion_programa_tam_min":"",
    //"KO_modo_correccion_programa_tam_max":"",
    "KO_modo_correccion_programa_valores_enum":"Modo de Corrección del Programa contiene valores no válidos (solo se permiten los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO)",

    // modo_aplicacion_programa
    "KO_modo_aplicacion_programa_nulo":"El campo Modo de Aplicación del Programa no puede estar vacío",
    //"KO_modo_aplicacion_programa_tam_min":"",
    //"KO_modo_aplicacion_programa_tam_max":"",
    "KO_modo_aplicacion_programa_valores_enum":"Modo de Apliación del Programa contiene valores no válidos (solo se permiten los valores INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO)",

    // imagen_programa
    "KO_imagen_programa_nulo":"El campo Imagen Programa no puede estar vacío",
    "KO_imagen_programa_tam_min":"El nombre de la Imagen del Programa debe contener un mínimo de 7 caracteres",
    "KO_imagen_programa_tam_max":"El nombre de la Imagen del Programa debe contener un máximo de 60 caracteres",
    "KO_imagen_programa_formato":"El nombre de la Imagen del Programa contiene carcteres no válidos (solo se permiten archivos .jpg o .jpeg cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)",

    // nuevo_imagen_programa
    "KO_nuevo_imagen_programa_nulo":"El campo Imagen Programa no puede estar vacío",
    "KO_nuevo_imagen_programa_tam_min":"La Imagen del Programa debe contener un mínimo de 7 caracteres",
    "KO_nuevo_imagen_programa_tam_max":"La Imagen del Programa debe contener un máximo de 60 caracteres",
    "KO_nuevo_imagen_programa_formato":"La Imagen del Programa no es válida (solo se permiten archivos .jpg o .jpeg cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)",
    "KO_nuevo_imagen_programa_tam_bytes":"La Imagen del Programa debe pesar un máximo de 20000 bytes",

    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    MENSAJES PUBLICACION                                                                     
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */

    // atributos publicacion (usados en el titulo de la tabla de presentación de datos)

    'id_publicacion':'Identificación Publicación',
    'titulo_publicacion':'Título Publicación',
    'autor_publicacion':'Autor Publicación',
    'fecha_publicacion':'Fecha Publicación',
    'area_publicacion':'Área Publicación',
    'texto_publicacion':'Texto Publicación',
    'imagen_publicacion':'Imagen Publicación',
    
    // label atributos publicacion

    'label_id_publicacion':'Introduzca el Id : ',
    'label_titulo_publicacion':'Introduzca el Título : ',
    'label_autor_publicacion':'Introduzca el Autor : ',
    'label_fecha_publicacion':'Introduzca la Fecha : ',
    'label_area_publicacion':'Introduzca el Área : ',
    'label_texto_publicacion':'Introduzca el Texto : ',
    'label_imagen_publicacion':'Introduzca la Imagen : ',

    // titulo general pagina publicaciones

    'titulo_pagina_publicacion':'Gestión de Publicaciones',

    //  titulos formularios acciones publicacion

    "titulo_form_ADD_publicacion":"Incorporar una publicación",
    "titulo_form_EDIT_publicacion":"Modificar una publicación",
    "titulo_form_DELETE_publicacion":"Confirmar borrar una publicación",
    "titulo_form_SEARCH_publicacion":"Buscar una publicación",
    "titulo_form_SHOWCURRENT_publicacion":"Ver detalle de una publicación",

    // errores de formato de publicacion en front

    // id_publicacion
    "KO_id_publicacion_nulo":"El campo ID de la Publicación no puede estar vacío",
    "KO_id_publicacion_tam_min":"El campo ID de la Publicación no puede estar vacío",
    "KO_id_publicacion_tam_max":"El ID de la Publicación debe contener un máximo de 6 caracteres",
    "KO_id_publicacion_formato":"El ID de la Publicación contiene caracteres no válidos (solo se permiten numéricos)",

    // titulo_publicacion
    "KO_titulo_publicacion_nulo":"El campo Título de la Publicación no puede estar vacío",
    "KO_titulo_publicacion_tam_min":"El Título de la Publicación debe contener un mínimo de 6 caracteres",
    "KO_titulo_publicacion_tam_max":"El Título de la Publicación debe contener un máximo de 80 caracteres",
    "KO_titulo_publicacion_formato":"El Título de la Publicación contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)",

    // autor_publicacion
    "KO_autor_publicacion_nulo":"El campo Autor de la Publicación no puede estar vacío",
    "KO_autor_publicacion_tam_min":"El Autor de la Publicación debe contener un mínimo de 6 caracteres",
    "KO_autor_publicacion_tam_max":"El Autor de la Publicación debe contener un máximo de 40 caracteres",
    "KO_autor_publicacion_formato":"El Autor de la Publicación contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)",

    // fecha_publicacion
    "KO_fecha_publicacion_nulo":"El campo Fecha de la Publicación no puede estar vacío",
    "KO_fecha_publicacion_formato":"La Fecha de la Publicación debe tener el formato dd/mm/aaaa",
    "KO_fecha_publicacion_formato2":"La Fecha de la Publicación contiene caracteres no válidos (solo se permiten caracteres numéricos y /)",
    
    // area_publicacion
    "KO_area_publicacion_nulo":"El campo Área de la Publicación no puede estar vacío",
    "KO_area_publicacion_tam_min":"El Área de la Publicación debe contener un mínimo de 1 caracteres",
    "KO_area_publicacion_tam_max":"El Área de la Publicación debe contener un máximo de 6 caracteres",
    "KO_area_publicacion_formato":"El Área de la Publicación contiene caracteres no válidos (solo se permiten numéricos)",

    // texto_publicacion
    "KO_texto_publicacion_nulo":"El campo Texto de la Publicación no puede estar vacío",
    "KO_texto_publicacion_tam_min":"El Texto de la Publicación debe contener un mínimo de 30 caracteres",
    "KO_texto_publicacion_tam_max":"El Texto de la Publicación debe contener un máximo de 8000 caracteres",
    "KO_texto_publicacion_formato":"El Texto de la Publicación contiene caracteres no válidos (solo se permiten caracteres ascii)",

    // imagen_publicacion
    "KO_imagen_publicacion_nulo":"El campo Imagen Publicacion no puede estar vacío",
    "KO_imagen_publicacion_tam_min":"El nombre de la Imagen de la Publicacion debe contener un mínimo de 7 caracteres",
    "KO_imagen_publicacion_tam_max":"El nombre de la Imagen de la Publicacion debe contener un máximo de 60 caracteres",
    "KO_imagen_publicacion_formato":"El nombre de la Imagen de la Publicacion contiene carcteres no válidos (solo se permiten archivos .jpg o .jpeg cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)",

    // nuevo_imagen_publicacion
    "KO_nuevo_imagen_publicacion_nulo":"El campo Imagen Publicacion no puede estar vacío",
    "KO_nuevo_imagen_publicacion_tam_min":"La Imagen de la Publicacion debe contener un mínimo de 7 caracteres",
    "KO_nuevo_imagen_publicacion_tam_max":"La Imagen de la Publicacion debe contener un máximo de 60 caracteres",
    "KO_nuevo_imagen_publicacion_formato":"La Imagen de la Publicacion no es válida (solo se permiten archivos .jpg o .jpeg cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)",
    "KO_nuevo_imagen_publicacion_tam_bytes":"La Imagen de la Publicacion debe pesar un máximo de 20000 bytes",

};

