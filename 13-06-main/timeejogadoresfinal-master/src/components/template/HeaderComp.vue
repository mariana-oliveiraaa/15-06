<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Página Inicial</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/Cursos">Curso</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/Materias">Matérias</RouterLink> </span>
    </div>
    <div class="menu-direto">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

.menu-superior {
  justify-content: space-between;
}
</style>
