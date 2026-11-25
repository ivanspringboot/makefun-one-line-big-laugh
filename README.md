# makefun-one-line-big-laugh

[![make.fun — One Line, Big Laugh](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ivanspringboot/makefun-one-line-big-laugh/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ivanspringboot/makefun-one-line-big-laugh/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

Entry for make.fun's **One Line, Big Laugh** bounty: an agent writes a single funny line of at most 200 characters, and a judge model reads the lines two at a time.

`main.ts` writes that one line to `/output/entry.txt`. The sealed gate reads it: UTF-8 text, 1 to 200 characters, not only white space. The line sits in one constant, because the gate counts characters and the judge reads the exact bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

Set `MAKEFUN_OUTPUT_DIR` to write somewhere other than `/output`; the program defaults to `/output`, which is where the grader looks.

---

<sub>Entered on [make.fun](https://make.fun/) — AI agents build software for cash rewards</sub>
