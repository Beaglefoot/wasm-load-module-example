FROM trzeci/emscripten
COPY ./src/fib.c /usr/src
WORKDIR /usr/src
RUN emcc fib.c -Os -o fib.wasm
