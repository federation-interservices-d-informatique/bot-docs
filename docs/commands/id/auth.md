---
title: Auth
---
# [Auth](https://github.com/federation-interservices-d-informatique/bot/blob/main/src/commands/id/auth.ts)
La commande `auth` sert à s'identifier avec son identifiant FII. Si vous réussisez, le CA recevra l'information.

:::danger
Cette commande ne doit que être utilisée en MP.
:::

## Utilisation:
```
&auth {username: String} {auth: String}
```

## Exemple:

<discord-messages>
<discord-message profile="zelcrom">&auth Zelcrom MONID</discord-message>
<discord-message profile="fiibot">Authentication réussie!</discord-message>
</discord-messages>