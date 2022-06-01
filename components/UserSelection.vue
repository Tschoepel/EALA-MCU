<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 -pt-20">
      <div class="flex flex-col items-center">
        <h1
          class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Marvel Cinematic Universe
        </h1>
      </div>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold pb-6">
          Herzlich Willkommen zu unseren E-Assessement System.
        </h2>
        <p class="text-base font-medium text-gray-900 pb-6">
          Bitte wählen sie eine der nachfolgenden Sichten aus:
        </p>
        <div
          class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2"
        >
          <UserCard
            title="Student"
            desc="Die normale Sicht eines Studenten, um verschiedene Tests abschließen zu können."
            :points="['Tests absolvieren', 'Feedback bekommen', 'Stoff lernen']"
            link="student/login"
          />
          <UserCard
            title="Professor"
            desc="Die Sicht eines Professors, um verschiedene Tests auswerten und korrigieren zu können."
            :points="['Tests korrigieren', 'Tests auswerten', 'Statistiken abrufen']"
            link="prof/login"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSelection',
}
</script>
