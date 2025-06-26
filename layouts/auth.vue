<template>
  <div class="stretcher">
    <div class="container">
      <div class="logo">
        <Logo />
      </div>
      <ContentCard class="card">
        <template #title>
          <slot name="title"></slot>
        </template>
        <template #desc>
          <slot name="desc"></slot>
        </template>
        <slot></slot>
        <p class="card__footer tinted">
          <slot name="footer"></slot>
        </p>
      </ContentCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stretcher {
  padding: 32px;

  @media screen and (min-width: 768px) {
    padding: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
}

.container {
  width: 100%;
  max-width: 476px;
  margin-inline: auto;
}

.logo {
  margin-bottom: var(--spacing-600);

  @media screen and (min-width: 768px) {
    text-align: center;
  }
}

.card {
  &__desc {
    margin-bottom: var(--spacing-600);
  }

  &__footer {
    margin-bottom: 0;
    text-align: center;
  }
}
</style>
