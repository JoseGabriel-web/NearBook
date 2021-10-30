# NearBook

La idea de nuestro proyecto es el de conectar a la comunidad Near en su propio social media, nuestro contrato permite crear articulos, darle like, quitar el like, conseguir los articulos creados, eliminar articulos creados estas son algunas de las funcionalidades, si tuvieramos mas tiempo agregariamos poder comentar que es posible que sea añadido para la presentacion.. Este smart contract permite:

- Crear/Eliminar un post.
- Dar/Quitar likes.
- Crear/Eliminar comments.


# :gear: Instalación

Para la instalación local de este projecto:

## Pre - requisitos

- Asegúrese de haber instalado Node.js ≥ 12 (recomendamos usar nvm).

- Asegúrese de haber instalado yarn: npm install -g yarn.

- Instalar dependencias: yarn install.

- Crear un test near account NEAR test account.

- Instalar el NEAR CLI globally: near-cli es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain.

# :key: Configurar NEAR CLI

Configura tu near-cli para autorizar tu cuenta de prueba creada recientemente:

```html
    near login
```

# :page_facing_up:	 Clonar el repositorio

```html
    git clone https://github.com/JoseGabriel-web/NearBook.git
```

```html
    cd NearBook
```

# :hammer_and_wrench: Build del proyecto y despliegue en development mode.

Instalar las dependencias necesarias con npm.


```html
    npm install
```

Hacer el build y deployment en development mode.


```html
    yarn start:app
```

# Comandos:



## Comando para crear un Post:

```html
    near call $CONTRATO createPost '{"title": "string", "description": "string"}' --account-id <id>.testnet
```

## Comando para crear un Comentario:

```html
    near call $CONTRATO createComment '{"label": "string", "postID": "string"}' --account-id <id>.testnet
```

## Comando para conseguir lista de Posts:

```html
    near view $CONTRATO listPosts
```

## Comando para conseguir lista de Post creados:

```html
    near call $CONTRATO getMyPosts --account-id <id>.testnet
```

## Comando para eliminar un comentario:

```html
    near call $CONTRATO removeComment '{"postID": "string", "commentID": "string"}' --account-id <id>.testnet
```

## Comando para quitar/dar like a un post:

```html
    near call $CONTRATO handlePostLike '{"postID": "string"}' --account-id <id>.testnet
```

## Comando para eliminar un Post:

```html
    near call $CONTRATO removePost '{"postID": "string"}' --account-id <id>.testnet
```