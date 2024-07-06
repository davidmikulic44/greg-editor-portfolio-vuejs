<template>
  <header>
    <section class="header-info">
      <div class="header-profile">
        <img src="https://i.imgur.com/f8dHITm.jpeg" alt="" class="header-avatar">
        <h3 class="header-name">Gregor</h3>
      </div>
      <a href="mailto:gregoredits29@gmail.com" target="_blank" class="contact-button">Contact</a>
    </section>
    <section class="header-socials">
      <SocialIcon :imageUrl="linkedin" link="https://www.linkedin.com/in/gregor-pr%C5%A1a-825ab5265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
      <SocialIcon :imageUrl="instagram" link="https://www.instagram.com/gregor.media/" />
      <SocialIcon :imageUrl="twitter" link="https://x.com/gregorprsaa?t=_1B2t1-XiM9u46K1I4s4yw&s=09" />
    
    </section>
  </header>
</template>

<script setup>
import SocialIcon from './SocialIcon.vue';
import linkedin from '../../assets/images/Vectorlinkedin.png'
import instagram from '../../assets/images/Vectorig.png'
import twitter from '../../assets/images/Vectorx.png'
</script>