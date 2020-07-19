import _ from 'lodash';
import { computed, Ref, ref } from 'vue';
export function getTextBulkActionItems(items: Ref<any[]>) {
  const bulkActionItemsNoDupes = computed(() => _.uniq(items.value.map(x=> x.text)));
  return {
    bulkActionItemsNoDupes
  }
}