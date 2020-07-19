import { emit } from "process"
<template>
  <table>
    <thead>
      <th v-for="column in columns" v-text="column.propertyName" :key="column.propertyName"/> 
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td v-for="column in columns" :key="item.id">
          <slot :name="`column-${column.propertyName}`" :value="item[column.propertyName]"> 
            {{item[column.propertyName]}}
          </slot>
        </td>
        <td class="prepend"><button @click="$emit('delete', item.id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    }
  }
});
</script>

<style>
.prepend {
    position: absolute;
}

</style>