<template>
  <div class="forms">
    <div style="color: white">Olá, {{ usuario.username }}</div>
    <label for="nome">Nome:</label>
    <input
      name="nome"
      type="text"
      placeholder="Nome"
      v-model="alterarUsuario.username"
    />
    <label for="nome">Email:</label>
    <input
      name="email"
      type="email"
      placeholder="E-mail"
      v-model="alterarUsuario.email"
    />
    <label for="senha">Senha:</label>
    <input
      name="senha"
      type="text"
      placeholder="Alterar senha"
      v-model="alterarUsuario.password"
    />
    <label for="senha">Confirmar senha:</label>
    <input
      type="text"
      placeholder="Confirmar alteração"
      v-model="confirmarSenha"
    />
    <button @click="atualizarUsuario">Confirmar alterações</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      usuario: {},
      alterarUsuario: {},
      confirmarSenha: "",
    };
  },

  mounted() {
    this.getUsuario();
  },

  methods: {
    async getUsuario() {
      const { data } = await axios.get("meu_usuario");
      this.usuario = data[0];
      console.log(this.usuario);
    },

    async atualizarUsuario() {
      await axios.patch(`usuarios/${this.usuario.id}/`, this.alterarUsuario);
      this.getUsuario();
    },
  },
};
</script>

<style>
</style>