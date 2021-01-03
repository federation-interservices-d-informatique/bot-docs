---
title: Unautoriseinvites
---
# [Unautoriseinvites](https://github.com/federation-interservices-d-informatique/bot/blob/main/src/commands/config/unautoriseinvites.ts)
La commande `unautoriseinvites` permet d'interdire les invitations dans tout le serveur / un canal.

## Utilisation
```
&unautoriseinvites (channels: string[])
```

## Exemples
> Autoriser / interdire les invitations sur tout le serveur
<discord-messages>
<discord-message profile="kilgharrah">&unautoriseinvites</discord-message>
<discord-message profile="fiibot">Les invitations sont maintenant interdites</discord-message>
<discord-message profile="kilgharrah">&unautoriseinvites</discord-message>
<discord-message profile="fiibot">Les invitations sont maintenant autorisées</discord-message>
</discord-message>
</discord-messages>

> Interdire les invitations dans certains canaux
<discord-messages>
<discord-message profile="kilgharrah">&unautoriseinvites <mention type="channel">général</mention></discord-message>
<discord-message profile="fiibot">Les salons  <mention type="channel">général</mention> sont encore ignorés! </discord-message>
</discord-messages>