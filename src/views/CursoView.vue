<template>
  <div>
    <div v-if="loading">
      <PageLoanding />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <ul class="aulas">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link :to="{ name: 'aula', params: { aula: aula.id } }">{{
                aula.nome
              }}</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoanding from "@/components/PageLoanding.vue";

export default {
  components: { PageLoanding },

  mixins: [fetchData],
  props: ["curso"],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: #fff;
}
</style>
