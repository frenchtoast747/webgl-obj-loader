WebGL-Obj-Loader
================

Takes in obj file data and loads a mesh.

## To create a new Mesh:

`var mesh = new Mesh( OBJString );`

To use the obj within a single file, do this:
`<script id='mesh' type='text/plain'>...paste OBJ File Here Preserving \n's...</script>`

And inside of your WebGL js file:
`var mesh = new Mesh( document.getElementById( 'mesh' ).innerHTML );`



#### The newly loaded object has four different attributes added to it:

1. Mesh.verts: the array of vertices.
2. Mesh.vertNormals: the array of vertex normals.
3. Mesh.vertexIndexArray: the array of vertex indices to be used with an Element Array.
4. Mesh.textureIndexArray: the array of texture indices.
5. Mesh.vertexNormalIndexArray: the array of vertex normal indices.
    
## Features to come later:

* actual texture coordinates

## Demo
http://frenchtoast747.github.com/WebGL-Obj-Loader/

## ChangeLog
* Vertex Normals are now loaded.