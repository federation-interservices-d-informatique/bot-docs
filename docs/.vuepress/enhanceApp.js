import VueDiscordMessage from 'vue-discord-message';

export default ({ Vue }) => {
	Vue.use(VueDiscordMessage, {
		avatars: {
            nio: require('../assets/nio.png'),
            fii: require('../assets/fii.png'),
            woomy: require('../assets/woomy.gif'),
            developheure: require('../assets/developheure.png'),
            abysmal: require('../assets/abysmal.png'),
            rheydskey: require('../assets/rheydskey.png'),
            barkod: require('../assets/barkod.png'),
            superfola: require('../assets/superfola.gif')
        },
        profiles: {
            nio: {
                author: 'NiO_Obers',
                roleColor: `#ff4093`,
                avatar: 'nio'
            },
            fiibot: {
                author: `FII - Bot`,
                bot: true,
                roleColor: `#4dbcba`,
                avatar: 'fii'
            },
            woomy: {
                author: 'Woomy',
                roleColor: `#ff4093`,
                avatar: 'woomy'
            },
            developheure: {
                author: 'DevelopHeure',
                roleColor: '#ff4093',
                avatar: 'developheure'
            },
            abysmal: {
                author: 'Abysmal',
                roleColor: '#ff4093',
                avatar: 'abysmal'
            },
            rheydskey: {
                author: 'Rheydskey 🍪',
                roleColor: '#ff4093',
                avatar: 'rheydskey'
            },
            barkod: {
                author: 'Barkod',
                roleColor: '#ff4093',
                avatar: 'barkod'
            },
            superfola: {
                author: 'SuperFola',
                roleColor: '#ff4093',
                avatar: 'superfola'
            }
        },
        'compact-mode': false
	});
};