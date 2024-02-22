<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom"
  >
    <div class="col-2 mb-0 ps-2">
      <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
          alt="RickAndMortySvg"
          style="width: 20rem"
        />
      </a>
    </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <a href="/" class="btn btn-primary mx-2">Accueil</a>
        <a href="/character" class="btn btn-primary mx-2">Personnage</a>
      </li>
    </ul>

    <div class="col-2 text-end pe-5">
      <button type="button" class="btn btn-outline-primary me-2">Login</button>
      <button type="button" class="btn btn-primary">Sign-up</button>
    </div>
  </header>
</template>
<script setup></script>
