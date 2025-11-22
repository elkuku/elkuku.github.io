import {defineConfig} from 'vitepress'

const isProd = process.env.NODE_ENV === 'production'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "KuKu's Page",
    description: "Don't forget this stuff...",
    head: [['link', {rel: 'icon', href: isProd ? '/favicon.ico' : '/favicon-dev.ico'}]],
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
       //     {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Comp',
                items: [
                    {text: 'Setup', link: '/pc-setup'},
                ],
            },
            {
                text: 'Gamez',
                items: [
                    {text: 'IITC Plugins', link: 'iitc-plugins'},
                ],
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/elkuku'}
        ],
        externalLinkIcon: true,
        docFooter: {
            prev: false, // Hides the "Previous" button
            next: false, // Hides the "Next" button
        },
    }
})
