---
title: Help
---
# [Help](https://github.com/discordjs-moka/moka/blob/main/src/commands/bot/help.ts)
> Note: La commande `help` n'est pas disponible sur le repo du bot, le lien est présent juste au dessus.

La commande `help` permet d'obtenir la liste des commandes du bot / des infos sur une commande en particulier.
## Utilisation
```
help (commande: string)
```
## Exemples
> Obtenir de l'aide pour toutes les commandes(liste)
<discord-messages>
<discord-message profile="developheure">&help</discord-message>
<discord-message profile="fiibot">
<discord-embed color="#a29dea">
<p><b>Aide de FII - Bot</b></p>
<p>
Voici la liste de mes commandes! Pour executer une commande, utilisez `&commande`.
`botinfo`                            
Obtenir les infos du Bot                    
`embed`                  
Envoyer un embed                    
`autorizeinvites`                  
Autoriser les invations sur le serveur / dans un canal en particulier           
`ignorechan`                  
Ignorer des canaux de l'antispam
</p>
</discord-embed>
</discord-message>
</discord-messages>

> Obtenir l'aide d'une seule commande:
<discord-messages>
<discord-message profile="developheure">&help botinfo</discord-message>
<discord-message profile="fiibot">
<discord-embed color="#f1c40f">
<p><b>Aide de la commande `botinfo`</b></p>
<p>Obtenir les infos du bot</p>
<br/>
<p>Alias: `infobot`</p>
</discord-embed>
</discord-message>
</discord-messages>