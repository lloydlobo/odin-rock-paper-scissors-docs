---
title: "Algorithms"
sidebar_label: "Algorithms"
---

## Real use cases variations

Rock Paper Scissors contests which deal with programming are quite popular. They are essentially a game of chance, where the player is trying to guess the best move to make.

Due to their popularity, several different algorithms have been developed to solve this problem.

:::tip
Fun Fact: The most popular algorithm is the [**Minimax algorithm**](https://en.wikipedia.org/wiki/Minimax).
:::

Let's see how the algorithm works and which have been developed:

### Using Robot Hand

> In 2012, researchers from the Ishikawa Watanabe Laboratory at the University of Tokyo created a robot hand that can play rock paper scissors with a 100% win rate against a human opponent.
>
> Using a high-speed camera the robot recognizes within one millisecond which shape the human hand is making, then produces the corresponding winning shape.
>
> <cite>— <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors#Algorithms">Wikipedia</a></cite>

### Heuristically Designed Algorithms

> For each strategy it employs, it also has six metastrategies which defeat second-guessing, triple-guessing, as well as second-guessing the opponent, and so on. The optimal strategy or metastrategy is chosen based on past performance. The main strategies it employs are history matching, frequency analysis, and random guessing.
>
> Its strongest strategy, history matching, searches for a sequence in the past that matches the last few moves in order to predict the next move of the algorithm. In frequency analysis, the program simply identifies the most frequently played move.
>
> The random guess is a fallback method that is used to prevent a devastating loss in the event that the other strategies fail. There has since been some innovations, such as using multiple history matching schemes that each match a different aspect of the history – for example, the opponent's moves, the program's own moves, or a combination of both. There have also been other algorithms based on Markov chains
>
> <cite>— <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors#Algorithms">Wikipedia</a></cite>
