<template>
  <div class="forms">
    <div style="color: white; font-size: 30px">Olá, {{ usuario.username }}</div>
    <label for="nome">Nome:</label>
    <input
      name="nome"
      type="text"
      placeholder="Alterar Nome"
      v-model="alterarUsuario.username"
    />
    <label for="nome">Email:</label>
    <input
      name="email"
      type="email"
      placeholder="Alterar E-mail"
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
    },

    async atualizarUsuario() {
      await axios.patch(`usuarios/${this.usuario.id}/`, this.alterarUsuario);
      this.alterarUsuario = {};
      this.getUsuario();
    },
  },
};
</script>

<style scoped>
.forms {
  width: 100%;
  height: 100%;
  border: 2px solid #4630ab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
}
label {
  color: #c9c9c9;
}
input {
  background-color: #111;
  border: 1px solid #4630ab;
  border-radius: 10px;
  height: 40px;
  width: 300px;
  padding: 5px;
  color: #c9c9c9;
}
button {
  height: 40px;
  width: 250px;
  background-color: #4630ab;
  border-radius: 30px;
  color: #c9c9c9;
}
</style>
