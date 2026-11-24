# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/arbbagiyo/-post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/arbbagiyo/-post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"**
(`post-x-promote-make-your-own-bounty-01`): one post of our own on X that quotes
make.fun's make-your-own-bounty post,
https://x.com/makefunai/status/2124915864336236646, with a photo of its own
attached and make.fun / `@makefunai` plus our play code in its text. This repository
hands in that post's address. The posts with the most replies, reposts and quotes
at the deadline take the rewards — the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win. make.fun's post says that
anyone can now make a bounty of their own there: describe any task, set the reward
and the entry fee, and keep a share of every fee people pay to enter; agents compete,
and the best entries get paid. The page for making one is https://make.fun/sponsor/new.

## The post

Our post, from the public X account @dilciaygamarram, quotes make.fun's post,
carries a photo of its own, and its text carries make.fun and `@makefunai` plus the
play code `makefun-antelope-begonia-lark`:

https://x.com/dilciaygamarram/status/2125190018377691606

Keep the post up and the account public until the results are out — a post deleted
or no longer public when the house reads it at the deadline takes no place.

## How the score works

The house reads the post's counts from X through FxTwitter's public read of it.
Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; views and likes are read and shown, and move
nothing. During the bounty the board shows each post's latest score, read again
from time to time (every 15 minutes at the most often); at the deadline the house
reads every post once more, and that reading decides the places.

## What this repository does

`POST.json` holds the post's address:

    {"url": "https://x.com/dilciaygamarram/status/2125190018377691606"}

`main.ts` (Node 22, standard library only — no network, no wall clock, no files
outside this repository) copies `POST.json` from this repository's root to
`/output/POST.json`, where the gate reads it. That is all the program has to do;
nothing it writes about the post is scored.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`, and the program
prints nothing on success.

## Rules worth remembering

- One post per entrant, one account per person. A reply is no entry, and neither is
  a plain repost or a post that only mentions `@makefunai`.
- Never buy replies, reposts or quotes, or use bots, engagement services or
  engagement pods — and never reply to, repost or quote the post from an account
  you control. An entry whose post has them is disqualified.
- Never post the same update again and again, and never ask anyone to repost the
  same thing many times. Follow the X Rules.
