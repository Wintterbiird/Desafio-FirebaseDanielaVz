<script>
import { RouterLink, RouterView } from "vue-router";
import { auth, signOut} from "@/auth";
export default {
  methods: {
  async logOut() {
    signOut(auth)
      .then(() => {
        alert("Has cerrado la sesión");
      })
      .catch((error) => {
        console.error("Error al cerrar la sesión: ", error);
        alert("Hubo un problema al cerrar la sesión. Inténtalo de nuevo.");
      });
  },
},
}
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/signUp">Registro</RouterLink>
      <RouterLink to="/login">Iniciar sesión</RouterLink>
      <button @click="logOut">Cerrar sesión</button>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
  padding-left: 20px;
}

nav a.router-link-exact-active {
  color: grey;
  text-decoration: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: #000;
}

nav a:first-of-type {
  border: 0;
}

button {
  font-size: 12px;
}
</style>
