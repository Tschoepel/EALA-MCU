<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1
        class="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Marvel Cinematic Universe
      </h1>
      <h2 class="text-center text-2xl font-bold text-gray-900">
        Login
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" :action="'/'+route" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" v-model="remember" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button type="submit" :class="loading?'bg-gray-500 cursor-not-allowed':'bg-indigo-600 hover:bg-indigo-700'" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="mr-2">Sign in</span>
              <svg
                v-if="!loading"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import Typed from "typed.js";

export default {
  props: {
    mail: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      email: this.mail,
      password: "password123456",
      remember: true,
      timeout: null,
      options: null,
      loading: false,
      route: null
    };
  },
  mounted () {
    // console.log(this.$route.path);
    this.route = this.$route.path.split("/", 2)[1];
    // this.options = {
    //   strings: [this.name.substring(0, 7).replace("n", "m"), this.name],
    //   typeSpeed: 60,
    //   backDelay: 500,
    //   showCursor: true,
    //   cursorChar: "|",
    //   autoInsertCss: true
    // };
    // let typed = new Typed("#email", options);
    // typed.start();

    // this.options.strings = ["^5000" + this.name.substring(0, 10)];
    // this.options.typeSpeed = 120;
    // typed = new Typed("#password", options);
    // typed.start();

    // setTimeout(() => { this.remember = true; }, 8000);
    // setTimeout(() => { this.loading = true; }, 8500);
    // setTimeout(() => { this.$router.push("/" + this.route); }, 8500);
  }
};
</script>
