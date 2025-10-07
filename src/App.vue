<script setup lang="ts">
import AppLink from './components/AppLink.vue';
import IconLink from './components/IconLink.vue';
import ProfilePicture from './components/ProfilePicture.vue';
import moxfieldIconSource from './images/moxfield.png';
import welovedevsIconSource from './images/welovedevs.png';
import type { ComponentProps } from './utils/types';

const profilePictureSource = `${__STATIC_APP_URL}/profile-picture-1.jpeg`

// const imageAlt = 'A picture of my face, while taking a coffee outside.'
const imgAlt = 'A picture of me by the water.'

const profileDescription = [
    'Software Engineer 💻 | ',
    '32 | ',
    'Fullstack Developer 🚀 | ',
    'JS Lover ❤️ | ', 
    'MTG Fan 🎴'
]

const emailHref = 'mailto:YzJsdGIyNHVjSEpwWlhWc1FHZHRZV2xzTG1OdmJRPT0=?subject=Mail from your website'

type HideableLink = {
    hidden?: boolean,
}
type ConfigurableIconLink = ComponentProps<typeof IconLink> & HideableLink
type ConfigurableAppLink = ComponentProps<typeof AppLink> & HideableLink

const socialLinks: ConfigurableIconLink[] = [
    {
        href: 'github',
        icon: 'github',
        tooltip: 'GitHub',
    },
    {
        href: 'linkedin',
        icon: 'linkedin',
        tooltip: 'LinkedIn',
    },
    {
        href: 'instagram',
        icon: 'instagram',
        tooltip: 'Instagram',
    },
    {
        hidden: true,
        href: 'bluesky',
        icon: 'bluesky',
        tooltip: 'Bluesky',
    },
]
const links: ConfigurableAppLink[] = [
    {
        text: 'My homepage',
        href: __HOMEPAGE_APP_URL,
        icon: 'mywebpage',
    },
    {
        hidden: true,
        text: 'LinkedIn',
        href: 'linkedin',
    },
    {
        text: 'WeLoveDevs',
        href: 'welovedevs',
        uninvertedIcon: welovedevsIconSource,
    },
    {
        text: 'My resume',
        href: `${__STATIC_APP_URL}/resume.pdf`,
        icon: 'myresume',
    },
    {
        hidden: true,
        text: 'GitHub',
        href: 'github',
    },
    {
        hidden: true,
        text: 'Instagram',
        href: 'instagram',
    },
    {
        hidden: true,
        text: 'Bluesky',
        href: 'bluesky',
    },
    {
        text: 'Moxfield',
        href: 'moxfield',
        uninvertedIcon: moxfieldIconSource,
    },
    {
        hidden: false,
        text: 'Chess.com',
        href: 'chesscom',
        icon: 'chess',
    },
    {
        text: 'Contact me',
        href: emailHref,
        icon: 'sendmeanemail',
    },
    {
        text: 'Buy Me a Coffee',
        href: 'coffee',
        icon: 'buymeacoffee',
    },
]

const nonHiddenSocialLinks = socialLinks.filter(link => link.hidden !== true)
const nonHiddenLinks = links.filter(link => link.hidden !== true)
</script>

<template>
    <div id="tree">
        <div id="profile-picture">
            <profile-picture :source="profilePictureSource"
                                :alt="imgAlt"
             />
        </div>
        <h1 id="profile-title">Simon Prieul</h1>
        <h2 id="profile-description"><span v-for="part in profileDescription">{{ part }}</span></h2>
        <div id="social-links-container">
            <icon-link v-for="link in nonHiddenSocialLinks"
                        :href="link.href"
                        :icon="link.icon"
                        :tooltip="link.tooltip"
            />
        </div>
        <div id="links-container">
            <app-link v-for="link in nonHiddenLinks"
                        :text="link.text"
                        :href="link.href"
                        :icon="link.icon"
                        :uninverted-icon="link.uninvertedIcon"
            />
        </div>
    </div>
</template>

<style scoped>
#tree {
    padding-top: 4rem;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 2rem;
    max-width: 480px;
}
#profile-title {
    font-size: 20px;
    font-weight: bold;
}
#profile-description {
    font-size: 16px;
    font-weight: normal;
}
#profile-description span {
    display: inline-block;
    white-space-collapse: preserve;
    text-wrap-mode: wrap;
}
#social-links-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
#links-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
}
</style>
