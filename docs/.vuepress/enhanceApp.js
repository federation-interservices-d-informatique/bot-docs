import VueDiscordMessage from 'vue-discord-message';

export default ({ Vue }) => {
	Vue.use(VueDiscordMessage, {
		avatars: {
            nio: require('../assets/nio.png'),
            fii: require('../assets/fii.png'),
            woomy: require('../assets/woomy.gif')
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
        },
        'compact-mode': false
	});
};