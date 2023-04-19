# PROYECTO FINAL REACT (CoderHouse)
## _iCommerce_
Este proyecto final trata sobre un ecommerce donde se podrán visualizar tres tipos de categorías de productos obtenidos desde una base de datos del servicio de Firebase.

## *Lenguajes utilizados:*
- JavaScript
- HTML
- CSS

## *Tecnologías utilizadas:*
- create-react-app
- Node.js
- Firebase

## *Para los desarrolladores:*

### Instalación:
Es necesario instalar Node.js con sus respectivas dependencias para comenzar a utilizar el entorno de desarrollo:
```sh
npm install
npm install firebase
npm start
```
### Variables de entorno:
El proyecto utiliza variables de entorno. Una vez autorizados a trabajar en el proyecto solicitar las mismas a fin de configurar el archivo .env de las variables.

## *Navegación:*
El sitio comienza desplegando todos los productos que se encuentran en la base de datos de Firebase. En la parte superior se denota un NavBar con tres categorías de productos, una para cada uno de los productos que se encuentran cargados en la base de datos respectivamente.
**Seguidamente se puede ver el ícono del carrito con su respectivo contador el cual veremos como sube o baja dependiendo de si se cargan productos o se van eliminando.**
Dentro de cada producto se puede navegar hacia el detalle de los mismos, donde surgirá un contador y un boton para agregar el producto/s al carrito. Una vez agregado el mismo desaparecerá para proceder al carrito a finalizar la compra.
**En la vista del carrito es posible eliminar los productos individualmente o vaciar el carrito por completo. De lo contrario se puede continuar al checkout.**
En la página del checkout nos va a solicitar tres datos que son imperativos de llenar ya que en caso de no llenar alguno se validará el formulario y no nos dejará finalizar con la compra.
**Una vez finalizada la compra se imprimirá por pantalla el ID de la compra por unos segundos y nos regresará a la página principal del sitio.**
### *Derechos y alcances:*
Reservados exclusivamente para propositos educativos.