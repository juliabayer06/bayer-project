<template>
  <header class="menu-superior">
    <span> <RouterLink to="/"> Home </RouterLink> </span>
    <span>|</span>
    <span> <RouterLink to="/times"> Comida </RouterLink> </span>
    <span>|</span>
    <span> <RouterLink to="/jogadores"> Preço </RouterLink> </span>
  </header>
</template>

<style>
header span {
  padding: 0 200px;
}
header.menu-superior {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header span {
  padding: 0 90px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
