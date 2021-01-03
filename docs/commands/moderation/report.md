---
title: Report
---
# [Report](https://github.com/federation-interservices-d-informatique/bot/blob/main/src/commands/moderation/report.ts)
La commande `report` permet de signaler un utilisateur.

## Utilisation:
```
&report {user: User} {raison: string}
```
## Exemple:
<discord-messages>
<discord-message profile="arzo">&report <mention type="user">Woomy</mention> test </discord-message>
<discord-message profile="fiibot">
<discord-embed color="#1a7c55">
<p><b>Merci de votre signalement</b></p>
<p>Votre signalement a bien été envoyé!</p>
</discord-embed>
</discord-message>
</discord-messages>

:::tip
Le signalement est ensuite envoyé au C.A de la FII.
:::