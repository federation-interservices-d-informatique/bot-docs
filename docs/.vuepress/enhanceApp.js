import VueDiscordMessage from 'vue-discord-message';

export default ({ Vue }) => {
	Vue.use(VueDiscordMessage, {
		avatars: {
			nio: require('../assets/nio.png'),
        },
        profiles: {
            nio: {
                author: 'NiO_Obers',
                roleColor: `#ff4093`
            }
        },
        'compact-mode': false
	});
};