<template>
  <dashboardsProf-dashboard nav="analysis">
    <div class="py-6">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Automatische Analysen
        </h1>
      </div>
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 pt-4">
        <!-- Replace with your content -->
        <div class="py-4 grid grid-cols-2 grid-flow-row gap-4">
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                <QuestionMarkCircleIcon class="h-6 w-6 inline-block text-yellow-400" aria-hidden="true" />
                Modul: Meist besuchte Seiten
              </h3>
              <div class="mt-2 text-gray-600">
                Wenige Studenten besuchen die Übungsseiten.<br><br>
                Folgende Punkte könnten vielleicht helfen:
                <ul class="list-disc list-inside">
                  <li>Studenten darauf hinweisen, dass die Übungen helfen  die Klausur zu bestehen.</li>
                  <li>Studenten mittels Bonuspunkten motivieren, die Übungsaufgaben abzugeben.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                <CheckCircleIcon class="h-6 w-6 inline-block text-green-600" aria-hidden="true" />
                Modul: Feedback
              </h3>
              <div class="mt-2 text-gray-600">
                <p>
                  In diesem Modul liegen alle Werte im Normalbereich.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                <QuestionMarkCircleIcon class="h-6 w-6 inline-block text-yellow-400" aria-hidden="true" />
                Modul: Übungsaktivitäten
              </h3>
              <div class="mt-2 text-gray-600">
                Die Übungen werden häufig abgebrochen.<br><br>
                Folgende Punkte könnten vielleicht helfen:
                <ul class="list-disc list-inside">
                  <li>Studenten fragen, ob sie Probleme mit den Übungsaufgaben haben.</li>
                  <li>Die Schwierigkeit der Übungsaufgaben verringern.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                <ExclamationIcon class="h-6 w-6 inline-block text-yellow-600 animate-pulse" aria-hidden="true" />
                Modul: Übungsverteilung
              </h3>
              <div class="mt-2 text-gray-600">
                Viele Studenten (<b>60%</b>) haben die Übungen nicht bestanden.<br><br>
                Folgende Punkte könnten vielleicht helfen:
                <ul class="list-disc list-inside">
                  <li>Studenten darauf hinweisen, dass die Übungen helfen  die Klausur zu bestehen.</li>
                  <li>Studenten mittels Bonuspunkten motivieren, die Übungsaufgaben abzugeben.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <!-- /End replace -->
      </div>
    </div>
  </dashboardsProf-dashboard>
</template>

<script setup>
import {
  ExclamationIcon,
  CheckCircleIcon,
  QuestionMarkCircleIcon
} from "@heroicons/vue/outline";
</script>
