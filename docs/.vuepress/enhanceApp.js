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
            superfola: require('../assets/superfola.gif'),
            kilgharrah: require('../assets/kilgharrah.png'),
            jojola: require('../assets/jojola.png'),
            daniel14920123: require('../assets/daniel14920123.png'),
            arzo: require('../assets/lp.png')
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
            },
            kilgharrah: {
                author: 'Kilgharrah',
                roleColor: '#ff4093',
                avatar: 'kilgharrah'
            },
            jojola: {
                author: 'Jojola',
                roleColor: '#ff4093',
                avatar: 'jojola'
            },
            daniel14920123: {
                author: 'daniel14920123',
                roleColor: '#ff4093',
                avatar: 'daniel14920123'
            },
            arzo: {
                author: 'Lightning Pelt ⚡',
                roleColor: '#ff4093',
                avatar: 'arzo'
            }
        },
        'compact-mode': false
	});
};