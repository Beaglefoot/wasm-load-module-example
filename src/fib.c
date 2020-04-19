#include <stdio.h>
#include <emscripten/emscripten.h>

int EMSCRIPTEN_KEEPALIVE fibC(int index)
{
  if (index <= 0)
  {
    return -1;
  }

  if (index <= 2)
    return 1;

  return fibC(index - 2) + fibC(index - 1);
}

int main()
{
  // printf("Result: %d\n", fibC(42));
  return 0;
}
