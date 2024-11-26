<script>
import { createUserWithEmailAndPassword, auth } from "@/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async SignUp() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        console.log("Usuario Registrado:", user);
      } catch (error) {
        console.error("Error al registrar:", error.message);
      }
    },
  },
};
</script>

<template>
  <div id="registro">
    <h2>Registro</h2>
    <input v-model="email" type="email" placeholder="Ingresa tu email" />
    <input
      v-model="password"
      type="password"
      placeholder="Ingresa tu contraseña"
    />
    <button @click="SignUp">Registrarse</button>
  </div>
</template>

<style>
#registro {
  display: grid;
  justify-content: center;
}
</style>
