<script>
import BaseButton from "@/components/BaseButton";
import BaseModal from "@/components/BaseModal";

export default {
  name: "Home",
  components: { BaseModal, BaseButton },
};
</script>


<template>
  <BaseModal ref="modal" :is-modal-opened="false" title="Welcome" />
  <BaseButton
      border-radius="0.1em"
      font-size="22px"
      background-color="hsla(210, 52%, 34%, 1)"
      color="#ffffff"
      @click="$refs.modal.setModalVisibility(true)"
  >Hello
  </BaseButton>

  <div class="view">
    <div class="view__outer">
      <div class="view__inner">

      </div>
    </div>
  </div>
</template>
