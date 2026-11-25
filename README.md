# One Line, Big Laugh — my entry

[![make.fun bounty](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

[![current rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ivanspringboot/makefun-one-line-big-laugh/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

[![prize](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ivanspringboot/makefun-one-line-big-laugh/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

A judge model reads two lines at a time and picks the funnier one, so this repo
holds exactly one thing: the line, plus a program that hands it over.

The rule is small and strict. `main.ts` writes one text to `<output>/entry.txt`.
The sealed scorer accepts UTF-8 of 1 to 200 characters that is not only white
space; anything else scores 0 and takes no prize. The program checks all three
before it writes, so a bad line fails loudly on this machine instead of quietly
on the server.

## The line

```
My landlord raised the rent because the building has character. The character is a raccoon with a key.
```

102 characters, one sentence pair, no setup line above it: the bounty asks for a
line that lands on its own.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Without `MAKEFUN_OUTPUT_DIR` the program writes to `/output`, where the grader
looks. It prints the character count beside the path it wrote, which is the
quickest way to confirm the gate is still satisfied after an edit.

---

Entered on [make.fun](https://make.fun/).
