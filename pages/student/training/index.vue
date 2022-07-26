<template>
  <dashboardsStudent-dashboard nav="training">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Training
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <InfoCard>
            <template #title>
              Informationen zum Training
            </template>
            <template #text>
              <p>
                Hier finden sich unterschiedliche Übungen, die während des Semesters bearbeitet werden sollen.<br>
                Die Übungsbätter können einmalig bearbeitet und abgebeben werden, wohingegen die zufällig erstellen Übungen beliebig oft wiederholt werden können.<br>
                Diese Übungen dienen der Auffrischung des gelerntes Stoffes während der letzten Woche.<br>
              </p>
            </template>
          </InfoCard>
          <div class="bg-white overflow-hidden sm:rounded sm:shadow mb-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                <div class="ml-4 mt-2">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Übungsbätter
                  </h3>
                </div>
                <div class="ml-4 mt-2 flex-shrink-0">
                  <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    ?
                  </button>
                </div>
              </div>
            </div>
            <div class="px-6 py-4">
              <div class="flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                            Name
                          </th>
                          <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Datum
                          </th>
                          <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Behandelter Stoff
                          </th>
                          <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Punkte
                          </th>
                          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Übungsblatt 1
                          </td>
                          <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {{ date }}
                          </td>
                          <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            Captain America &amp; Captain Marvel
                          </td>
                          <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            -/10
                          </td>
                          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                            <a href="/student/training/1" class="text-indigo-600 hover:text-indigo-900">Abgabe hochladen</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>

<script setup>
// import ActorQuiz from "~~/components/items/ActorQuiz.vue";
const date = new Date().toLocaleDateString("de-DE");
</script>
