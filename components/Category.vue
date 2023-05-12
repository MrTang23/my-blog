<template>
  <div class="theme-main__inner theme-category">
    <div class="theme-category__list">
      <h1 class="theme-category__title">总 共 {{$category.list.length}} 个 分 类</h1>
      <router-link class="theme-category__link" v-for="item in $category.list" :key="item.name" :to="item.path">▪ {{ item.name }} [{{item.pages.length}}]</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category'
}
</script>
<style lang="stylus">
.theme-category
  background var(--theme-card-background)
  border-radius: 6px;
  padding: 2.15rem;
  &__title
    margin 0 0 1.5rem 0
    font-size: 1.78571rem;
    font-weight normal
  &__link
    display inline-block
    background var(--theme-accent-color-005)
    padding: 0 1em;
    border-radius: 3px;
    line-height: 2.4;
    transition: background-color .15s;
    margin: 0 1rem 1rem 0;
    &:hover
      background var(--theme-accent-color)
      color #ffffff
  
</style>