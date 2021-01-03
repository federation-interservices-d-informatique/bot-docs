---
title: Autoriseinvites
---
# [Autoriseinvites](https://github.com/federation-interservices-d-informatique/bot/blob/main/src/commands/config/autoriseinvites.ts)
La commande `autoriseinvites` sert à autoriser les invations sur le serveur / dans un canal en particulier.
:::tip
La commande ne supprimera pas les liens d'invitation pour les serveurs de la FII (ceux disponibles dans le HUB)
:::
:::warning
La permission `ADMINISTRATEUR` est requise pour utiliser cette commande
:::

## Utilisation
```
&autoriseinvites (channels: string[])
```

## Exemples
> Autoriser/interdire sur tout le serveur
<discord-messages>
<discord-message profile="nio">&autoriseinvites</discord-message>
<discord-message profile="fiibot">Les invitations sont maintenant autorisées</discord-message>
<discord-message profile="nio">&autoriseinvites</discord-message>
<discord-message profile="fiibot">Les invitations sont maintenant interdites</discord-message>
</discord-messages>

> Autoriser dans certains canaux
<discord-messages>
<discord-message profile="nio">&autoriseinvites <mention type="channel">général</mention>  <mention type="channel">logs</mention> <mention type="channel">pub</mention></discord-message>
<discord-message profile="fiibot">Les salons  <mention type="channel">général</mention> <mention type="channel">logs</mention> <mention type="channel">pub</mention> seront maintenant ignorés! </discord-message>
</discord-messages>