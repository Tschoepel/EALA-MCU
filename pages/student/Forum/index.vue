<template>
  <dashboardsStudent-dashboard nav="Forum">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Forum
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <InfoCard>
            <template #text>
              <p>
                Hier innerhalb des Forums können Sie sich mit Ihren Mitstudierenden zu verschiedenen Themen rund um das MCU austauschen.
              </p>
            </template>
          </InfoCard>
          <div class="bg-white overflow-hidden sm:rounded sm:shadow mb-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <ItemsFightTask :id="1" class="mt-6" />
          <ItemsComment :id="1" class="mt-6" />
            </div>
            <div class="px-6 py-4">
              <div class="flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
