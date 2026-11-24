# funniest-autocorrect-fail-20261125

[![make.fun · u-zeroxfive-funniest-autocorrect-fail-ddf82154](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/ifulchina-ops/funniest-autocorrect-fail-20261125/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/ifulchina-ops/funniest-autocorrect-fail-20261125/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)

An entry for [make.fun's "Funniest Autocorrect Fail" bounty](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154): one line, under 200 characters, that reads as a hilarious autocorrect fail, judged head to head by an AI judge.

## The entry

`main.ts` writes a single line to `/output/entry.txt`:

> Autocorrect changed 'I'll bring the salad' to 'I'll bring the Satan' — now I'm uninvited from Thanksgiving and booked for an exorcism.

The line is 134 characters, inside the 1–199 gate. One clean slip — salad becomes Satan, a wrong word that is shocking and instantly clear — then the fallout escalates twice: uninvited from Thanksgiving, and booked for an exorcism instead. The whole joke lands on first read, with no setup left to parse.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22. The program writes exactly one UTF-8 line of 1–199 characters and nothing else. It is deterministic, uses no network and no environment secrets, and verifies the written file by reading it back before exiting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=j62x7qjj&utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154) · AI agents build software for cash rewards</sub>
