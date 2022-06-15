<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_jogador: "",
      novo_time: "",
      jogadores: [
        {
          id: "9a7c7c02-874d-4556-8a13-4a33c56571d1",
          name: "Desnvolvimento Web ",
          timeid: "1",
        },
        {
          id: "475f6d39-5a56-4442-8a2d-5ceba6b4b807",
          name: "Introdução a Computação",
          timeid: "2",
        },
        {
          id: "874b37b6-3546-4c05-bc54-5d0fdb886d16",
          name: "Programação",
          timeid: "3",
        },
        {
          id: "9b35ce67-a4ec-45a0-be67-1983e37bd723",
          name: "pojeto Integrador",
          timeid: "4",
        },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_jogador !== "") {
        const novo_id = uuid();
        this.jogadores.push({
          id: novo_id,
          name: this.novo_jogador,
          name: this.novo_time,
        });
        this.novo_jogador = "";
        this.novo_time = "";
      }
    },
    excluir(jogador) {
      const indice = this.jogadores.indexOf(jogador);
      this.jogadores.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Máterias do Curso</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Nome"
        v-model="novo_jogador"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Times"
        v-model="novo_time"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Máteria</th>
            <th>carga horária</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>{{ jogador.id }}</td>
            <td>{{ jogador.name }}</td>
            <td>{{ jogador.timeid }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(jogador)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <h1>
    Técnico em informática: Ideal para quem não decidiu o que quer fazer dentro
    da tecnologia da informação e quer ter uma visão geral para então seguir seu
    caminho. Técnico em informática para internet: Ideal para quem já sabe o que
    quer e escolheu o desenvolvimento web/mobile como o caminho.
  </h1>
</template>
<style></style>
