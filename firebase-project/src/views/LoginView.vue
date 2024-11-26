<script>
import { signInWithEmailAndPassword, auth, signOut, getAuth } from "@/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async logIn() {
      try {
        const { email, password } = this;
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Usuario logueado", user);
      } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
      }
    },
  },
};
</script>

<template>
  <div id="login-form">
    <h2>Iniciar Sesión</h2>
    <input v-model="email" type="email" placeholder="Ingresa tu email" />
    <input
      v-model="password"
      type="password"
      placeholder="Ingresa tu contraseña"
    />
    <div id="buttons">
      <button @click="logIn">Iniciar sesión</button>
    </div>
  </div>
</template>

<style scoped>
#login-form {
  display: grid;
  justify-content: center;
}

#buttons {
  display: flex;
  justify-content: space-between;
}

button{
  width: 100%;
}
</style>
