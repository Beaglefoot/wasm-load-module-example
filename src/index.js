const ITERATIONS = 42;
let fibC;

function fibJs(index) {
  if (index <= 0) throw new Error('Sequence starts from 1');
  if (index <= 2) return 1;

  return fibJs(index - 2) + fibJs(index - 1);
};



async function initFibC() {
  const obj = await WebAssembly.instantiateStreaming(fetch('fib.wasm'));
  fibC = obj.instance.exports._fibC;
}



function getDuration(func) {
  const start = Date.now();
  func(ITERATIONS);
  return Date.now() - start + 'ms';
}



function main() {
  const resultJsNode = document.getElementById('result-js');
  const resultWasmNode = document.getElementById('result-wasm');

  resultJsNode.textContent = getDuration(fibJs);
  resultWasmNode.textContent = getDuration(fibC);
}

initFibC().then(main);
