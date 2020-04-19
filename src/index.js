function fibJs(index) {
  if (index === 0) throw new Error('Sequence starts from 1');
  if (index <= 2) return 1;

  return fibJs(index - 2) + fibJs(index - 1);
};

function getJsDuration() {
  const startJs = Date.now();
  fibJs(42);
  return Date.now() - startJs;
}

const resultJsNode = document.getElementById('result-js');
const resultWasmNode = document.getElementById('result-wasm');

resultJsNode.textContent = getJsDuration();
