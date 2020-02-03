# curso-platzi-react-avanzado ⚛️

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)



## instalando weback
 Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
Paso 1: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
Paso 2: Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack
Paso 3: Instalaremos html-webpack-plugin con: npm i html-webpack-plugin --save-dev.
Paso 4: Instalaremos webpack-dev-server con: npm i webpack-dev-server --save-dev.
Paso 5: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server"

```python
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin()
        ]
}
```

## instalando React y Babel

En esta clase vamos a configurar React instalando las dependencias npm i react react-dom y Babel para poder transpilar código jsx a JavaScript Vanilla con: npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev.

Ahora añadiremos en nuestro webpack.config.js lo siguiente:

```python
// webpack.config.js
{/*...*/}
module.exports = {
        {/*...*/}
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: [
                                                        '@babel/preset-env',
                                                        '@babel/preset-react'
                                                ]
                                        }
                                }
                        }
                ]
        }
}
```