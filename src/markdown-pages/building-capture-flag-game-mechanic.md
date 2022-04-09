---
slug: '/blog/building-capture-flag-game-mechanic'
date: '2022-04-09'
title: 'Building a capture the flag game mechanic'
featuredImage: ../images/avatar.png
featuredImageAlt: "My avatar"
tags: ['development', 'game', 'unity']
published: false
---

I wanted to implement a capture the flag game mechanic for my yet to be named game, which like many other projects of mine, will most likely disappear into obscurity.

The game itself is a [MOBA](https://en.wikipedia.org/wiki/Multiplayer_online_battle_arena) (*Multiplayer Online Battle Arena*) where up to (*a yet to be determined number of*) players battle it out. Placed around the map will be villages that can be captured, granting the occupying player a trait (*a buff or skill*) and spawning NPCs (*Non Player Characters*) that will head off into the wilds in search of fame and glory.

How might one build such a game mechanic, you might ask? Whilst there are many ways to skin a cat, per se, I have chosen to build the logic using a behavioural model called a State Machine or Finite State Machine.

# What is a Finite State Machine?

A Finite State Machine (*FSM*) is an abstract machine that has a limited (*finite*) number of states. The machine can only be in one state at a time. Each state will have one or more conditions that will allow transition between one state and another.

As an example, we can create a rudimentary and simple FSM that we can all relate to that models how Water can transition to Steam or Ice.

```
( Steam ) >= 100℃ > ( Water ) > 0℃ => ( Ice )
```

Water cannot be both Water and Steam or Water and Ice. Ice cannot be Steam and vice versa.

When the temperature of Water reaches 0℃ it freezes and turns to ice, when it reaches 100℃ it boils and turns to steam.

When states and transitions can be represented in this way, a FSM is an excellent model to utilise. States, transitions and their conditions can be clearly defined and implemented, reducing the chance for error within the system and making the logic easily interpreted and understood by a human.

# Identifying the behaviours of capturing a village

A FSM is a behavioural model, and thus, before we attempt to conceptualise it, we must first understand the representative behaviours and how we go from one to another.

My process for doing this is to write down a number of statements that describe the behaviours, transitions and conditions.

Below, I have created some statements where I have highlighted the key words that identify either a state, condition or transition.

> When **a player** comes close to an **un-occupied** village they can start **occupying** it.

> **A player** successfully **occupies** a village when they have replaced the village's flag with theirs.

> If **a player** leaves the village before it is **occupied**, the village will start **un-occupying** itself.

> An **un-occupying** village will quickly return to **un-occupied** once it has replaced the player's flag with its own.

> When **a player** comes close to an **un-occupying** village they can start **occupying** it.

> A village being **occupied** can be **contested** by **another player**.

> After **destroying** an **occupied** villages defenses, **another player** can start **occupying** it.

# Conceptualising a Finite State Machine

Now that we have thought about our game mechanic and how it will behave, we can visualise the State Machine by drawing a flow chart.

Here is the legend:

![Legend](../images/capture-flag-state-machine-legend.png)

Here is the State Machine:

![State Machine](../images/capture-flag-state-machine.png)

# Coding a State Machine

Whilst my example is written for Unity, the concept can be applied to any game engine.

The basic contract for states within a State Machine is:

- **On enter**. Provides a way for the state to perform an action(s) when it is first entered, such as play an animation or setup.
- **On exit**. Provides a way for the state to perform an action(s) prior to exiting, such as clean-up.
- **On update**. Provides a way for the state to perform action(s) on each update to the frame, such as check some condition.

Of course, this can be expanded to include any number of hooks.

In C# an abstract class can be used to both specify a public API as well as perform anything common to all states.

```csharp
public abstract class VillageState
{
    public virtual void OnEnter(IStateMachine stateMachine)
    { }

    public virtual void OnUpdate(IStateMachine stateMachine)
    { }

    public virtual void OnEnter(IStateMachine stateMachine)
    { }
}
```

Making the methods virtual will simplify the concrete classes and avoid you having to created empty methods when not needed.

And an example of one of our states:

```csharp
public class UnOccupiedState : VillageState
{
    public override void OnUpdate(IStateMachine stateMachine)
    {
        IPlayer occupiers = DetectOccupiers(stateMachine.OccupyRange, stateMachine.PlayerMask);

        if (occupiers.Length == 0)
            return;
        else if (occupiers.Length == 1)
            stateMachine.TransitionTo(stateMachine.States.Occupying);
        else
            stateMachine.TransitionTo(stateMachine.States.Contested);
    }

    private IPlayer[] DetectOccupiers(float occupyRange, int playerMask)
    {
        ...
    }
}
```

And an example of our State Machine:

```csharp
public class Village : GameObject, IStateMachine
{

    public void TransitionToState(VillageState state)
    {

    }
}


```

# The end result