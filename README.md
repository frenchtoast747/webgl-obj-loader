WebGL-Obj-Loader
================

Takes in obj file data and loads a mesh.

#### Requirements:
* jQuery (for the use of the util function downloadMeshes)

#### To create a new Mesh:

`var mesh = new obj_loader.Mesh( OBJString );`

Where OBJString is the string containing the OBJ file.

To use the obj within a single file, do this:
`<script id='mesh' type='text/plain'>...paste OBJ File Here Preserving \n's...</script>`

And inside of your WebGL js file:
`var mesh = new obj_loader.Mesh( document.getElementById( 'mesh' ).innerHTML );`

#### The newly loaded object has four different attributes added to it:

1. Mesh.vertices: the array of vertices.
2. Mesh.vertexNormals: the array of vertex normals.
3. Mesh.indices: the array of vertex indices to be used with an Element Array.
4. Mesh.textures: the array of texture indices.

#### Downloading Meshes

If you are able to host your OBJs on a server, then the OBJ Loader provides a function `obj_utils.downloadMeshes` to download all of the obj models, create the meshes with the provided loader, and then run a callback function passing the newly created meshes to that callback function. `obj_utils.downloadMeshes` takes in a JavaScript Object comprised of `<mesh_name> : <url>`, as well as the function literal or function name for the callback.

For example:
```javascript
function initGL(canvas) {
    try {
        gl = canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
    } catch (e) {
    }
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

// the webgl context
var gl;
// init the context
initGL(canvas);
// a container variable (like a namespace protector)
var app = {};
app.meshes = {};
$(document).ready(function(){
    obj_utils.downloadMeshes(
        {
            'suzanne': 'http://mydomain.com/objs/suzanne.obj',
            'another_mesh': 'http://mydomain.com/objs/some_other_model.objs'
        },
        webGLStart
    );
});

function webGLStart( meshes ){
     app.meshes = meshes;
     initBuffers()
     ...
}

function initBuffers(){
     obj_utils.initMeshBuffers( gl, app.meshes.suzanne );
     obj_utils.initMeshBuffers( gl, app.meshes.another_mesh );
     ...
}
```

* **Note:** the downloadMeshes function requires jQuery at this time.*

## Demo
http://frenchtoast747.github.com/WebGL-Obj-Loader/
This demo is the same thing inside of the gh-pages branch. Do a `git checkout gh-pages` inside of the webgl-obj-loader directory
to see how the OBJ loader is used in a project.

## ChangeLog
* Vertex Normals are now loaded into mesh.vertexNormals
* Texture Coordinates are now loaded into mesh.textures
* Initial support for Quad models

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/frenchtoast747/webgl-obj-loader/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

