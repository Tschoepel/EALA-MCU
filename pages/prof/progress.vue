<template>
  <dashboardsProf-dashboard nav="progress">
    <div class="py-6">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Current progress &amp; todos
        </h1>
      </div>
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 pt-4">
        <!-- Replace with your content -->
        <div class="py-4 grid grid-cols-2 grid-flow-row gap-4">
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Sebastian - Prof Dashboard, LA &amp; EDM
              </h3>
              <div class="mt-2 text-gray-600">
                What was achieved:
                <ul class="list-disc list-inside">
                  <li>Skeleton of the WebApp with a general styling.</li>
                  <li>ClosedText item type with automated correction.</li>
                  <li>Statistics will be collected in different parts of the student dashboard</li>
                  <li>Statistics are evaluated automatically and displayed in the prof dashboard.</li>
                </ul>
                <hr class="my-3">
                What needs to be done:
                <ul class="list-disc list-inside">
                  <li>Automatic analysis based on different modules.</li>
                  <li>Suggestions for the prof based on that analytics.</li>
                  <li>Collect more data for the statistics and possibly the detection of trends.</li>
                  <li>Further expand the prof dashboard.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Max - AIG
              </h3>
              <div class="mt-2 text-gray-600">
                What was achieved:
                <ul class="list-disc list-inside">
                  <li>Sort by question via DragDrop: Get data from Wikidata with SPARQL and generate random question, correct solution and submitted answer is also checked </li>
                </ul>
                <hr class="my-3">
                What needs to be done:
                <ul class="list-disc list-inside">
                  <li>Pixel/Zoom game with image: Guess the superhero as fast as possible to get more points </li>
                  <li>Build a more complex AIG Item </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Romy - Item types
              </h3>
              <div class="mt-2 text-gray-600">
                What was achieved:
                <ul class="list-disc list-inside">
                  <li>Built hearing item, where you have to guess from a short audio snippet</li>
                </ul>
                <hr class="my-3">
                What needs to be done:
                <ul class="list-disc list-inside">
                  <li>Build more complex and creative drag and drop tasks</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Rupert - Student dashboard & automated Feedback
              </h3>
              <div class="mt-2 text-gray-600">
                What was achieved:
                <ul class="list-disc list-inside">
                  <li>MultipleChoice item type with automated correction.</li>
                </ul>
                <hr class="my-3">
                What needs to be done:
                <ul class="list-disc list-inside">
                  <li>Further expand the student dashboard.</li>
                  <li>Explicit informative Feedback at the end of a Training/Exercise Sheet/Test</li>
                  <li>Elaborate Feedback and Visualization of Progress and Development Stage of Student in Student Dashboard</li>
                  <li>Optional expansion on ItemTypes (Randomized Battles/ Battle groups: Who wins)</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Elias - Item types
              </h3>
              <div class="mt-2 text-gray-600">
                What was achieved:
                <ul class="list-disc list-inside">
                  <li>ShortText item type.</li>
                  <li>DrawItem type.</li>
                </ul>
                <hr class="my-3">
                What needs to be done:
                <ul class="list-disc list-inside">
                  <li>Adding Hints which can be used by the examinee but result in point deduction</li>
                </ul>
              </div>
              <div class="mt-2 text-gray-600">
                <p />
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
</script>
