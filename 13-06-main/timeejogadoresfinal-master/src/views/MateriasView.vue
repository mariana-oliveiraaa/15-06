<script>
import { v4 as uuid} from "uuid";
export default {
  data() {
    return {
      novo_time: "",
      times: [
        { id: "98940c1e-e312-4f81-801b-ec969b2e6ed4", name: "conteudo1" },
        { id: "3f8e15ef-cf81-4596-9f02-e51a6a9b38a3", name: "conteudo2" },
        { id: "2be66caf-d783-426e-8723-55f518c06a6f", name: "conteudo3" },
        { id: "9a7c7c02-874d-4556-8a13-4a33c56571d1", name: "conteudo3" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== ""){
        const novo_id=uuid();
        this.times.push({
          id: novo_id,
          name: this.novo_time,
        });
        this.novo_time = "";
      }
    },
    excluir(time){
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Matérias</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_time" @keypress.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>{{ time.id }}</td>
            <td>{{ time.name }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(time)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
 
</template>

<style></style>
