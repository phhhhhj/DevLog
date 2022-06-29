<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'"/>
    <footer class="siteFooter">
      Copyright &copy; 2022 by Hyunjung Park. All rights reserved.
    </footer>
  </div>
</template>