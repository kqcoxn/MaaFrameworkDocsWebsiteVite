<script setup>
import Project from "../components/Project.vue";
import { uis, tools, apps } from "../assets/data/projects";
</script>

<template>
  <section class="maa-project-list">
    <Project
      v-for="project in uis"
      :title="project.name"
      :desc="project.desc"
      :logo="project.logo"
      :stack="project.stack"
      :link="project.link"
    />
  </section>
</template>
