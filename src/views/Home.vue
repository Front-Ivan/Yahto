<template>
  <div class="home">
    <h1 class="page-title">Новости</h1>
    <a href="#">Недавние</a>

    <div class="home__content home__content_top">
      <div class="post" v-for="(post, idx) in posts" :key="idx">
        <div class="post__content post__content_bottom">
          <LikeButton
              :type="'post'"
              :liked="post.postLiked"
              @click="post.postLiked = !post.postLiked"
          />
        </div>

        <h2>Тут текст поста</h2>
        <div class="post__left">
          <div class="post__like">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="post__icon-like">
              <path d="M14.44 0.100006C12.63 0.100006 11.01 0.980006 10 2.33001C8.99 0.980006 7.37 0.100006 5.56 0.100006C2.49 0.100006 0 2.60001 0 5.69001C0 6.88001 0.19 7.98001 0.52 9.00001C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 9.00001C19.81 7.98001 20 6.88001 20 5.69001C20 2.60001 17.51 0.100006 14.44 0.100006Z" fill="#FF7F5C"/>
            </svg>
            <span>{{ post.countLikes }}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="post__icon-comment">
              <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="#292D32"/>
              <path d="M19.8 9.42C19.78 9.42 19.76 9.43 19.74 9.43C19.64 9.45 19.54 9.46 19.43 9.48C19.01 9.52 18.56 9.5 18.1 9.41C17.98 9.38 17.88 9.36 17.77 9.32C17.44 9.24 17.13 9.11 16.84 8.94C16.72 8.88 16.6 8.8 16.49 8.73C16.01 8.4 15.6 7.99 15.27 7.51C15.2 7.4 15.12 7.28 15.06 7.16C14.89 6.87 14.76 6.56 14.68 6.23C14.64 6.12 14.62 6.02 14.59 5.9C14.5 5.44 14.48 4.99 14.52 4.57C14.54 4.46 14.55 4.36 14.57 4.26C14.57 4.24 14.58 4.22 14.58 4.2C14.7 3.58 14.24 3 13.6 3H7.52C7.38 3 7.24 3.01 7.11 3.02C6.99 3.03 6.88 3.04 6.76 3.06C6.64 3.07 6.52 3.09 6.41 3.11C4 3.46 2.46 4.99 2.11 7.41C2.09 7.52 2.07 7.64 2.06 7.76C2.04 7.88 2.03 7.99 2.02 8.11C2.01 8.24 2 8.38 2 8.52V16.48C2 16.62 2.01 16.76 2.02 16.89C2.03 17.01 2.04 17.12 2.06 17.24C2.07 17.36 2.09 17.48 2.11 17.59C2.46 20.01 4 21.54 6.41 21.89C6.52 21.91 6.64 21.93 6.76 21.94C6.88 21.96 6.99 21.97 7.11 21.98C7.24 21.99 7.38 22 7.52 22H15.48C15.62 22 15.76 21.99 15.89 21.98C16.01 21.97 16.12 21.96 16.24 21.94C16.36 21.93 16.48 21.91 16.59 21.89C19 21.54 20.54 20.01 20.89 17.59C20.91 17.48 20.93 17.36 20.94 17.24C20.96 17.12 20.97 17.01 20.98 16.89C20.99 16.76 21 16.62 21 16.48V10.4C21 9.76 20.42 9.3 19.8 9.42ZM6.75 12.5H11.75C12.16 12.5 12.5 12.84 12.5 13.25C12.5 13.66 12.16 14 11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5ZM15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5 17.25C16.5 17.66 16.16 18 15.75 18Z" fill="#292D32"/>
            </svg>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 5.99999V19.91C11.25 20.62 10.53 21.11 9.88 20.84C8.02 20.06 5.71 19.38 4.07 19.16L3.76 19.12C2.79 19 2 18.11 2 17.14V5.24999C2 4.04999 2.97 3.07999 4.17 3.07999H4.24C6.12 3.23999 8.89 4.11999 10.72 5.10999C11.05 5.28999 11.25 5.61999 11.25 5.99999Z" fill="#FEC75E"/>
            <path d="M19.83 3.07999H19.77C19.53 3.09999 19.27 3.12999 19 3.17999C17.77 3.37999 16.31 3.79999 15 4.31999C14.38 4.56999 13.8 4.83999 13.29 5.10999C12.96 5.28999 12.75 5.62999 12.75 5.99999V19.91C12.75 20.62 13.47 21.11 14.12 20.84C15.98 20.06 18.29 19.38 19.93 19.16L20.24 19.12C21.21 19 22 18.11 22 17.14V5.24999C22 4.04999 21.03 3.07999 19.83 3.07999ZM19.27 13.73C19.27 14.12 18.99 14.29 18.65 14.1L17.59 13.51C17.48 13.45 17.3 13.45 17.18 13.51L16.12 14.1C15.78 14.29 15.5 14.12 15.5 13.73V10.66C15.5 10.2 15.88 9.81999 16.34 9.81999H18.44C18.9 9.81999 19.28 10.2 19.28 10.66V13.73H19.27Z" fill="#FEC75E"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from "@/components/LikeButton.vue";
import { reactive } from "vue";

export default {
  name: "Home",
  components: { LikeButton },
  setup() {
    let posts = reactive([
      { postLiked: false, countLikes: 10 },
      { postLiked: false, countLikes: 15 },
      { postLiked: false, countLikes: 5 },
      { postLiked: false, countLikes: 10 },
      { postLiked: false, countLikes: 1 },
      { postLiked: false, countLikes: 0 },
      { postLiked: false, countLikes: 164 },
    ])

    return {
      posts,
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  & .page-title {
    margin-bottom: 7px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 30px;
    padding: 0 4.625vw 0 0;

    &_top {
      margin-top: 18px;
    }
  }
}

.post {

  &__content {
    width: 100%;
    min-height: 323px;
    height: 28.409vh;
    background: #000;
    border-radius: 24px;
    position: relative;

    &_bottom {
      margin-bottom: 21px;
    }
  }

  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  &__like {
    display: flex;
    margin-top: 8px;

    & > span {
      margin-left: 2px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #18333E;
      opacity: 0.7;
    }
  }

  &__icon {
    &__like {

    }

    &-comment {
      margin: 0 0 0 5px;
      position: relative;
      bottom: 2px;
    }
  }
}
</style>