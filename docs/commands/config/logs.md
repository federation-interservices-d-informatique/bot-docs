---
title: Logs
---
# [Logs](https://github.com/federation-interservices-d-informatique/bot/blob/main/src/commands/config/logs.ts)
La commande `logs` permet de configurer les logs du serveur.
:::warning
La permission `ADMINISTRATEUR` est requise pour utiliser cette commande
:::

## Utilisation:
```
&logs (channel: string)
```
## Exemples:
> Obtenir le nom du canal de logs
<discord-messages>
<discord-message profile="superfola">&logs</discord-message>
<discord-message profile="fiibot">
<discord-embed color="#d6662a">
Le salon de logs est actuellement <mention type="channel">logs</mention>
</discord-embed>
</discord-message>
</discord-messages>

> Changer le canal de logs
<discord-messages>
<discord-message profile="superfola">&logs <mention type="channel">logs</mention></discord-message>
<discord-message profile="fiibot">
<discord-embed color="#2ad3d6">
Le salon <mention type="channel">logs</mention> a bien été défini comme salon de logs
</discord-embed>
</discord-message>
</discord-messages>