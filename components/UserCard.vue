<template>
  <div
    class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 hover:border-slate-400 cursor-pointer"
    @click="$router.push(link); "
  >
    <div class="p-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h2>
      <p class="mt-4 text-sm text-gray-500">
        {{ desc }}
      </p>
    </div>
    <div class="pt-6 pb-8 px-6">
      <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">
        Was ist möglich
      </h3>
      <ul role="list" class="mt-6 space-y-4">
        <li v-for="point in points" :key="point" class="flex">
          <svg
            class="flex-shrink-0 h-5 w-5 text-green-500"
            x-description="Heroicon name: solid/check"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-sm text-gray-500 ml-2">{{ point }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    points: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  }
}
</script>
