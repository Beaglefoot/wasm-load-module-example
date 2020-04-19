# wasm-load-module-example
Naive side by side performance comparison of unmemoized Fibonacci number calculations.
Serves to demonstrate how to compile C function to WebAssembly and call it from JS without emscripten runtime.

## How to build & run
1. `yarn install`
2. `docker build -t wasm-load-module-example .`
3. `docker cp $(docker run -d wasm-load-module-example):/usr/src/fib.wasm ./src/`
4. `yarn start`

## To find names of exported wasm functions
Get inside docker container:
```sh
docker run -it wasm-load-module-example bash
```

Once inside check WAST:
```sh
root@66cd9754dbf5:/usr/src# wasm-dis fib.wasm
(module
 (type $0 (func (param i32) (result i32)))
 (type $1 (func (result i32)))
 (global $global$0 (mut i32) (i32.const 2752))
 (export "_fibC" (func $0))
 (export "_main" (func $1))
 (export "stackAlloc" (func $2))
...
```

## Helpful reading
[Compiling a New C/C++ Module to WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm)

[Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

[WebAssembly Standalone](https://github.com/emscripten-core/emscripten/wiki/WebAssembly-Standalone)
