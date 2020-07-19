<template>
  <Table
    :items="items" 
    :columns="columns"
    @delete="idToDelete => handleDelete(idToDelete)"
  >
    <template #column-description="columnProps">
      <b>{{columnProps.value}}</b>
    </template>
    
    </Table>

    <select>
      <option v-for="text in bulkActionItemsNoDupes" :value="text" v-text="text"/>
    </select>
</template>

<script lang="ts">
import { getTextBulkActionItems } from "./composables";
import {ref} from "vue"

import Table from "./Table.vue";
export default {
  setup(props,ctx) {
  interface Item {
    id: string;
    text: string;
    description: string;
  }
  interface Column {
    propertyName: keyof Item
  }
    const items = ref<Item[]>([ 
      {id: 'abc0', text: 'hell', description: 'welcome'},
      {id: 'abc1', text: 'hello', description: 'welcome'},
      {id: 'abc2', text: 'hello', description: 'welcome'},
      {id: 'abc3' , text: 'hello', description: 'welcome'}
    ]);
     const columns = ref<Column[]>([
      {propertyName: 'text'},
      {propertyName: 'description'}
    ])
  return {
     ...getTextBulkActionItems(items),
    items,
    columns
  }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Table
  },
  mounted() {
    console.log(this.items);
  },
  methods: {
    handleDelete(itemToDeleteId: string) {
      this.items = this.items.filter(({id}) => id !== itemToDeleteId)
    }
  }
}
</script>
