<script setup lang="ts">
import AppLink from './components/AppLink.vue';
import ProfilePicture from './components/ProfilePicture.vue';
import blueskyIconSource from './images/bluesky.svg';
import envelopeIconSource from './images/envelope.svg';
import ghIconSource from './images/gh.svg';
import idcardIconSource from './images/idcard.svg';
import instagramIconSource from './images/instagram.svg';
import linkedinIconSource from './images/linkedin.svg';
import moxfieldIconSource from './images/moxfield.png';
import webIconSource from './images/web.svg';
import welovedevsIconSource from './images/welovedevs.png';
import type { ComponentProps } from './utils/types';

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

// const socialLinks: ComponentProps<typeof IconLink>[] = [
//     {
//         href: 'instagram',
//         icon: 'instagram',
//     },
//     {
//         href: 'bluesky',
//         icon: 'bluesky',
//     }
// ]
const links: ComponentProps<typeof AppLink>[] = [
    {
        text: 'My website',
        href: 'https://simon.prieul.fr',
        icon: webIconSource,
    },
    {
        text: 'LinkedIn',
        href: 'linkedin',
        icon: linkedinIconSource,
    },
    {
        text: 'WeLoveDevs',
        href: 'welovedevs',
        uninvertedIcon: welovedevsIconSource,
    },
    {
        text: 'My resume',
        href: 'https://simon.prieul.fr/static/resume.pdf',
        icon: idcardIconSource,
    },
    {
        text: 'GitHub',
        href: 'github',
        icon: ghIconSource,
    },
    {
        text: 'Instagram',
        href: 'instagram',
        icon: instagramIconSource,
    },
    {
        text: 'Bluesky',
        href: 'bluesky',
        icon: blueskyIconSource,
    },
    {
        text: 'Moxfield',
        href: 'moxfield',
        uninvertedIcon: moxfieldIconSource,
    },
    {
        text: 'Contact me',
        href: emailHref,
        icon: envelopeIconSource,
    },
]
</script>

<template>
    <div id="tree">
        <div id="profile-picture">
            <profile-picture source="https://simon.prieul.fr/static/profile-picture-1.jpeg"
                                :alt="imgAlt"
             />
        </div>
        <h1 id="profile-title">Simon Prieul</h1>
        <h2 id="profile-description"><span v-for="part in profileDescription">{{ part }}</span></h2>
        <!-- <div id="social-links-container">
            <icon-link v-for="link in socialLinks"
                        :href="link.href"
                        :icon="link.icon"
            />
        </div> -->
        <div id="links-container">
            <app-link v-for="link in links"
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
#links-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
}
</style>
