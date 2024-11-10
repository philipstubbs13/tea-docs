---
title: pnpm
description: A guide in my new Starlight docs site.
---

- pnpm takes the place of something like yarn or npm.

* <https://www.youtube.com/watch?v=hiTmX2dW84E>
* pnpm is a replacement for npm or yarn.
* faster
* efficient
* end up having a lot of projects on your machine. And, over time, these projects end of taking up a lot of space because of all the node_modules folders.
* Inside of node_modules, you have symilinks to another location.
* pnpm is storing all of the node_modules you install inside of a single address. One place on your machine, and it is referencing them with symilinks rather than installing all of those packages into each project over time.
* disk space efficient
* monorepo workspace features
* Can install using npm
* It doesn't copy all of your node modules 25000 times to your hard drive.
* It uses symilinks.
