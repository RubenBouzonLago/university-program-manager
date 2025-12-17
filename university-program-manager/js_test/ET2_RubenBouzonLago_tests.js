var def_test =Array(

    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    TESTS PROGRAMA                                                                     
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */

    // id_programa
    Array('programa','id_programa',1,'tamaño menor que 1',false,'El campo ID del Programa no puede estar vacío'),
    Array('programa','id_programa',2,'tamaño mayor que 6',false,'El ID del Programa debe contener un máximo de 6 caracteres'),
    Array('programa','id_programa',3,'alfabéticos, alfabeticos con acento, espacios o símbolos',false,'El ID del Programa contiene caracteres no válidos (solo se permiten numéricos)'),
    Array('programa','id_programa',4,'entre 1 y 6 caracteres numéricos exclusivamente',true,'Exito'),

    // nombre_programa
    Array('programa','nombre_programa',5,'vacío',false,'El campo Nombre del Programa no puede estar vacío'),
    Array('programa','nombre_programa',6,'tamaño menor que 6',false,'El Nombre del Programa debe contener un mínimo de 6 caracteres'),
    Array('programa','nombre_programa',7,'tamaño mayor que 60',false,'El Nombre del Programa debe contener un máximo de 60 caracteres'),
    Array('programa','nombre_programa',8,'números o símbolos distintos del espacio',false,'El Nombre del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)'),
    Array('programa','nombre_programa',9,'entre 6 y 60 caracteres alfabéticos, alfabéticos con acento, espacio y/o ñ',true,'Exito'),

    // acronimo_programa
    Array('programa','acronimo_programa',10,'vacío',false,'El campo Acrónimo del Programa no puede estar vacío'),
    Array('programa','acronimo_programa',11,'tamaño menor que 3',false,'El Acrónimo del Programa debe contener un mínimo de 3 caracteres'),
    Array('programa','acronimo_programa',12,'tamaño mayor que 20',false,'El Acrónimo del Programa debe contener un máximo de 20 caracteres'),
    Array('programa','acronimo_programa',13,'números, alfabéticos con acento, símbolos o espacio',false,'El Acrónimo del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos sin acento y sin espacios)'),
    Array('programa','acronimo_programa',14,'entre 3 y 20 caracteres alfabéticos sin acentos o espacios',true,'Exito'),

    // nombre_original_programa
    Array('programa','nombre_original_programa',15,'vacío',false,'El campo Nombre Original del Programa no puede estar vacío'),
    Array('programa','nombre_original_programa',16,'tamaño menor que 6',false,'El Nombre Original del Programa debe contener un mínimo de 6 caracteres'),
    Array('programa','nombre_original_programa',17,'tamaño mayor que 60',false,'El Nombre Original del Programa debe contener un máximo de 60 caracteres'),
    Array('programa','nombre_original_programa',18,'números o símbolos distintos del espacio',false,'El Nombre Original del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)'),
    Array('programa','nombre_original_programa',19,'entre 6 y 60 caracteres alfabéticos, alfabéticos con acento, espacio y/o ñ',true,'Exito'),

    // autor_programa
    Array('programa','autor_programa',20,'vacío',false,'El campo Autor del Programa no puede estar vacío'),
    Array('programa','autor_programa',21,'tamaño menor que 6',false,'El Autor del Programa debe contener un mínimo de 6 caracteres'),
    Array('programa','autor_programa',22,'tamaño mayor que 50',false,'El Autor del Programa debe contener un máximo de 50 caracteres'),
    Array('programa','autor_programa',23,'números o símbolos distintos del espacio',false,'El Autor del Programa contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)'),
    Array('programa','autor_programa',24,'entre 6 y 50 caracteres alfabéticos, alfabéticos con acento, espacio y/o ñ',true,'Exito'),

    // autor_original_programa
    Array('programa','autor_original_programa',25,'vacío',false,'El campo Autor Original del Programa no puede estar vacío'),
    Array('programa','autor_original_programa',26,'tamaño menor que 6',false,'El Autor Original del Programa debe contener un mínimo de 6 caracteres'),
    Array('programa','autor_original_programa',27,'tamaño mayor que 50',false,'El Autor Original del Programa debe contener un máximo de 50 caracteres'),
    Array('programa','autor_original_programa',28,'números o símbolos distintos del espacio',false,'El Autor Original del Programa contiene carcteres no válidos (solo se permiten carcteres alfabéticos, alfabéticos con acento, espacio y ñ)'),
    Array('programa','autor_original_programa',29,'entre 6 y 50 caracteres alfabéticos, alfabéticos con acento, espacio y/o ñ',true,'Exito'),

    // ano_programa
    Array('programa','ano_programa',30,'vacío',false,'El campo Año del Programa no puede estar vacío'),
    Array('programa','ano_programa',31,'tamaño distinto de 4',false,'El Año del Programa debe contener exactamente 4 digitos'),
    Array('programa','ano_programa',32,'alfabéticos, alfabéticos con acentos, símbolos o espacios',false,'El Año del Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)'),
    Array('programa','ano_programa',33,'año mayor que Año actual',false,'El Año del Programa no puede ser posterior al Año actual'),
    Array('programa','ano_programa',34,'4 digitos cuyo valor sea menor al Año actual',true,'Exito'),

    // ano_original_programa
    Array('programa','ano_original_programa',35,'vacío',false,'El campo Año Original del Programa no puede estar vacío'),
    Array('programa','ano_original_programa',36,'tamaño distinto de 4',false,'El Año Original del Programa debe contener exactamente 4 digitos'),
    Array('programa','ano_original_programa',37,'alfabéticos, alfabéticos con acentos, símbolos o espacios',false,'El Año Original del Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)'),
    Array('programa','ano_original_programa',38,'año mayor que Año actual',false,'El Año Original del Programa no puede ser posterior al Año actual'),
    Array('programa','ano_original_programa',39,'4 digitos cuyo valor sea menor al Año actual',true,'Exito'),

    // requisitos_programa
    Array('programa','requisitos_programa',40,'vacío',false,'El campo Requisitos del Programa no puede estar vacío'),
    Array('programa','requisitos_programa',41,'tamaño menor que 6',false,'Los Requisitos del Programa deben contener un mínimo de 6 caracteres'),
    Array('programa','requisitos_programa',42,'tamaño mayor que 300',false,'Los Requisitos del Programa deben contener un máximo de 300 caracteres'),
    Array('programa','requisitos_programa',43,'numéricos, signos que no sean de puntuación',false,'Los Requisitos del Programa contienen caracteres no válidos (solo se permiten caracteres alfabeticos, alfabeticos con acento, signos de puntuación, ñ y espacios)'),
    Array('programa','requisitos_programa',44,'entre 6 y 300 alfabéticos, alfabéticos con acentos, ñ, espacios y/o signos de puntuación',true,'Exito'),

    // poblacion_desde_programa
    Array('programa','poblacion_desde_programa',45,'tamaño menor que 1',false,'El campo Población desde Programa no puede estar vacío'),
    Array('programa','poblacion_desde_programa',46,'tamaño mayor que 2',false,'Población desde Programa debe contener un máximo de 2 dígitos'),
    Array('programa','poblacion_desde_programa',47,'alfabéticos, alfabéticos con acentos, símbolos o espacios',false,'Población desde Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)'),
    Array('programa','poblacion_desde_programa',48,'entre 1 y 2 dígitos exclusivamente',true,'Exito'),

    // poblacion_hasta_programa
    Array('programa','poblacion_hasta_programa',49,'tamaño menor que 1',false,'El campo Población hasta Programa no puede estar vacío'),
    Array('programa','poblacion_hasta_programa',50,'tamaño mayor que 2',false,'Población hasta Programa debe contener un máximo de 2 dígitos'),
    Array('programa','poblacion_hasta_programa',51,'alfabéticos, alfabéticos con acentos, símbolos o espacios',false,'Población hasta Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)'),
    Array('programa','poblacion_hasta_programa',52,'entre 1 y 2 dígitos exclusivamente',true,'Exito'),

    // unidad_poblacion
    Array('programa','unidad_poblacion',53,'valor no seleccionado',false,'El campo Unidad Población no puede estar vacío'),
    Array('programa','unidad_poblacion',54,'valor distinto de MESES o AÑOS',false,'Unidad de Población contiene valores no válidos (solo se permiten los valores MESES o AÑOS)'),
    Array('programa','unidad_poblacion',55,'valor MESES o AÑOS',true,'Exito'),

    // tipo_programa
    Array('programa','tipo_programa',56,'valor no seleccionado',false,'El campo Tipo de Programa no puede estar vacío'),
    Array('programa','tipo_programa',57,'valor distinto de EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN',false,'Tipo de Programa contiene valores no válidos (solo se permiten los valores EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN)'),
    Array('programa','tipo_programa',58,'valor EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN',true,'Exito'),

    // tiempo_aplicacion_programa
    Array('programa','tiempo_aplicacion_programa',59,'tamaño menor que 1',false,'El campo Tiempo de Apliación de Programa no puede estar vacío'),
    Array('programa','poblacion_hasta_programa',60,'tamaño mayor que 4',false,'Tiempo de Aplicación de Programa debe contener un máximo de 4 dígitos'),
    Array('programa','poblacion_desde_programa',61,'alfabéticos, alfabéticos con acentos, símbolos o espacios',false,'Tiempo de Aplicación de Programa contiene caracteres no válidos (solo se permiten caracteres numéricos)'),
    Array('programa','poblacion_desde_programa',62,'entre 1 y 4 dígitos exclusivamente',true,'Exito'),

    // descrip_interp_programa
    Array('programa','descrip_interp_programa',63,'tamaño menor que 1',false,'El campo Descripción e Interpretación del Programa no puede estar vacío'),
    Array('programa','descrip_interp_programa',64,'tamaño menor que 100',false,'La Descripción e Interpretación del Programa debe contener un mínimo de 100 caracteres'),
    Array('programa','descrip_interp_programa',65,'tamaño mayor que 5000',false,'La Descripción e Interpretación del Programa debe contener un máximo de 5000 caracteres'),
    Array('programa','descrip_interp_programa',66,'numéricos, signos que no sean de puntuación',false,'La Descripción e Interpretación del Programa contiene caracteres no válidos (solo se permiten caracteres alfabeticos, alfabeticos con acento, signos de puntuación, retornos de carro, ñ y espacios)'),
    Array('programa','descrip_interp_programa',67,'entre 100 y 5000 alfabéticos, alfabéticos con acentos, ñ, espacios, signos de puntuación y/o retornos de carro',true,'Exito'),

    // fichero_programa
    Array('programa','fichero_programa',68,'tamaño menor que 1',false,'El campo Fichero Programa no puede estar vacío'),
    Array('programa','fichero_programa',69,'tamaño menor que 7',false,'El nombre del Fichero del Programa debe contener un mínimo de 7 caracteres'),
    Array('programa','fichero_programa',70,'tamaño mayor que 60',false,'El nombre del Fichero del Programa debe contener un máximo de 60 caracteres'),
    Array('programa','fichero_programa',71,'números, alfabéticos con acento, símbolos, ñ o espacio',false,'El nombre del Fichero del Programa contiene carcteres no válidos (solo se permiten archivos .pdf, .doc o .docx cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)'),
    Array('programa','fichero_programa',72,'archivo .pdf, .doc o .docx con nombre entre 7 y 60 alfabéticos sin acentos, ni ñ ni espacios',true,'Exito'),

    // enlace_programa
    Array('programa','enlace_programa',73,'tamaño menor que 1',false,'El campo Enlace Programa no puede estar vacío'),
    Array('programa','enlace_programa',74,'tamaño menor que 10',false,'El Enlace del Programa debe contener un mínimo de 10 caracteres'),
    Array('programa','enlace_programa',75,'tamaño mayor que 100',false,'El Enlace del Programa debe contener un máximo de 100 caracteres'),
    Array('programa','enlace_programa',76,'numéricos, espacios, alfabéticos con acentos, ñ o símbolos distintos de : o . o /',false,'El Enlace del Programa contiene caracteres no válidos (solo se permiten carcteres alfabéticos y : y / y . sin acentos ni ñ ni espacios)'),
    Array('programa','enlace_programa',77,'entre 10 y 100 caracteres alfabéticos sin acentos, sin ñ ni espacios ni símbolos distintos de ., : o /',true,'Exito'),

    // formato_programa
    Array('programa','formato_programa',78,'valor no seleccionado',false,'El campo Formato de Programa no puede estar vacío'),
    Array('programa','formato_programa',79,'valor distinto de PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO',false,'Formato de Programa contiene valores no válidos (solo se permiten los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO)'),
    Array('programa','formato_programa',80,'valor PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO',true,'Exito'),

    // modo_correccion_programa
    Array('programa','modo_correccion_programa',81,'valor no seleccionado',false,'El campo Modo de Corrección del Programa no puede estar vacío'),
    Array('programa','modo_correccion_programa',82,'valor distinto de PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO',false,'Modo de Corrección del Programa contiene valores no válidos (solo se permiten los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO)'),
    Array('programa','modo_correccion_programa',83,'valor PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO',true,'Exito'),

    // modo_aplicacion_programa
    Array('programa','modo_aplicacion_programa',84,'valor no seleccionado',false,'El campo Modo de Aplicación del Programa no puede estar vacío'),
    Array('programa','modo_aplicacion_programa',85,'valor distinto de INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO',false,'Modo de Apliación del Programa contiene valores no válidos (solo se permiten los valores INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO)'),
    Array('programa','modo_aplicacion_programa',86,'valor INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO',true,'Exito'),

    // imagen_programa
    Array('programa','imagen_programa',87,'tamaño menor que 1',false,'El campo Imagen Programa no puede estar vacío'),
    Array('programa','imagen_programa',88,'tamaño menor que 7',false,'El nombre de la Imagen del Programa debe contener un mínimo de 7 caracteres'),
    Array('programa','imagen_programa',89,'tamaño mayor que 60',false,'El nombre de la Imagen del Programa debe contener un máximo de 60 caracteres'),
    Array('programa','imagen_programa',90,'números, alfabéticos con acento, símbolos, ñ o espacio',false,'El nombre de la Imagen del Programa contiene carcteres no válidos (solo se permiten archivos .jpg o .jpeg cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)'),
    Array('programa','imagen_programa',91,'archivo .jpg o .jpeg con nombre entre 7 y 60 alfabéticos sin acentos, ni ñ ni espacios',true,'Exito'),

    /*
    ************************************************************************************************************************************************************
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    TESTS PROGRAMA                                                                     
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    ************************************************************************************************************************************************************
    */

    // id_publicacion
    Array('publicacion','id_publicacion',92,'tamaño menor que 1',false,'El campo ID de la Publicación no puede estar vacío'),
    Array('publicacion','id_publicacion',93,'tamaño mayor que 6',false,'El ID de la Publicación debe contener un máximo de 6 caracteres'),
    Array('publicacion','id_publicacion',94,'alfabéticos, alfabeticos con acento, espacios o símbolos',false,'El ID de la Publicación contiene caracteres no válidos (solo se permiten numéricos)'),
    Array('publicacion','id_publicacion',95,'entre 1 y 6 caracteres numéricos exclusivamente',true,'Exito'),

    // titulo_publicacion
    Array('publicacion','titulo_publicacion',96,'vacío',false,'El campo Título de la Publicación no puede estar vacío'),
    Array('publicacion','titulo_publicacion',97,'tamaño menor que 6',false,'El Título de la Publicación debe contener un mínimo de 6 caracteres'),
    Array('publicacion','titulo_publicacion',98,'tamaño mayor que 80',false,'El Título de la Publicación debe contener un máximo de 80 caracteres'),
    Array('publicacion','titulo_publicacion',99,'números o símbolos distintos del espacio',false,'El Título de la Publicación contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)'),
    Array('publicacion','titulo_publicacion',100,'entre 6 y 80 caracteres alfabéticos, alfabéticos con acento, espacio y/o ñ',true,'Exito'),

    // autor_publicacion
    Array('publicacion','autor_publicacion',101,'vacío',false,'El campo Autor de la Publicación no puede estar vacío'),
    Array('publicacion','autor_publicacion',102,'tamaño menor que 6',false,'El Autor de la Publicación debe contener un mínimo de 6 caracteres'),
    Array('publicacion','autor_publicacion',103,'tamaño mayor que 40',false,'El Autor de la Publicación debe contener un máximo de 40 caracteres'),
    Array('publicacion','autor_publicacion',104,'números o símbolos distintos del espacio',false,'El Autor de la Publicación contiene carcteres no válidos (solo se permiten caracteres alfabéticos, alfabéticos con acento, espacio y ñ)'),
    Array('publicacion','autor_publicacion',105,'entre 6 y 40 caracteres alfabéticos, alfabéticos con acento, espacio y/o ñ',true,'Exito'),

    // fecha_publicacion
    Array('publicacion','fecha_publicacion',106,'vacío',false,'El campo Fecha de la Publicación no puede estar vacía'),
    Array('publicacion','fecha_publicacion',107,'alfabéticos, alfabéticos con acentos, símbolos o espacios',false,'La Fecha de la Publicación contiene caracteres no válidos (solo se permiten caracteres numéricos y /)'),
    Array('publicacion','fecha_publicacion',108,'fecha en formato aaaa/mm/dd compuesta por números y /',true,'Exito'),

    // area_publicacion
    Array('publicacion','area_publicacion',109,'vacío',false,'El campo Área de la Publicación no puede estar vacío'),
    Array('publicacion','area_publicacion',110,'tamaño mayor que 6',false,'El Área de la Publicación debe contener un máximo de 6 caracteres'),
    Array('publicacion','area_publicacion',111,'alfabéticos, alfabeticos con acento, espacios o símbolos',false,'El Área de la Publicación contiene caracteres no válidos (solo se permiten numéricos)'),
    Array('publicacion','area_publicacion',112,'entre 1 y 6 caracteres numéricos exclusivamente',true,'Exito'),

    // texto_publicacion
    Array('publicacion','texto_publicacion',113,'vacío',false,'El campo Texto de la Publicación no puede estar vacío'),
    Array('publicacion','texto_publicacion',114,'tamaño menor que 30',false,'El Texto de la Publicación debe contener un mínimo de 30 caracteres'),
    Array('publicacion','texto_publicacion',115,'tamaño mayor que 8000',false,'El Texto de la Publicación debe contener un máximo de 8000 caracteres'),

    // imagen_publicacion
    Array('publicacion','imagen_publicacion',116,'tamaño menor que 1',false,'El campo Imagen de la Publicación no puede estar vacío'),
    Array('publicacion','imagen_publicacion',117,'tamaño menor que 7',false,'El nombre de la Imagen de la Publicación debe contener un mínimo de 7 caracteres'),
    Array('publicacion','imagen_publicacion',118,'tamaño mayor que 50',false,'El nombre de la Imagen de la Publicación debe contener un máximo de 60 caracteres'),
    Array('publicacion','imagen_publicacion',119,'números, alfabéticos con acento, símbolos, ñ o espacio',false,'El nombre de la Imagen de la Publicación contiene carcteres no válidos (solo se permiten archivos .jpg o .jpeg cuyo nombre contenga únicamente caracteres alfabéticos, sin ñ, sin acento y sin espacios)'),
    Array('publicacion','imagen_publicacion',120,'archivo .jpg o .jpeg con nombre entre 7 y 60 alfabéticos sin acentos, ni ñ ni espacios',true,'Exito')

);

