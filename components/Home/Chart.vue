<script setup>
import Chart from "primevue/chart";
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["teck", "love", "novel"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [
          documentStyle.getPropertyValue("--p-cyan-500"),
          documentStyle.getPropertyValue("--p-orange-500"),
          documentStyle.getPropertyValue("--p-gray-500"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--p-cyan-400"),
          documentStyle.getPropertyValue("--p-orange-400"),
          documentStyle.getPropertyValue("--p-gray-400"),
        ],
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");

  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: textColor,
        },
      },
    },
  };
};
</script>
<template>
  <div class="main">
    <div
      class="flex flex-col flex-wrap justify-center mt-10 bg-red-500 opacity-80 card"
    >
      <div class="text-center border-t-8 border-red-500">
        <h1 class="text-[40px] font- uppercase font-mono">
          Most read categories
        </h1>
        <p class="text-[20px] mt-6 font-serif">
          Your books are with you wherever you go.
        </p>
      </div>
      <div class="flex flex-row flex-wrap justify-center Chart">
        <p class="md:w-[500px] text-center font-mono font-semibold text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at illo
          dicta iste id aperiam delectus. Aliquid vero minima molestias, tempore
          aperiam temporibus deleniti eos, assumenda, suscipit consequuntur
          iusto accusantium.
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at illo
            dicta iste id aperiam delectus. Aliquid vero minima molestias,
            tempore aperiam temporibus deleniti eos, assumenda, suscipit
            consequuntur iusto accusantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit at illo dicta iste id aperiam
            delectus. Aliquid vero minima molestias, tempore aperiam temporibus
            deleniti eos, assumenda, suscipit consequuntur iusto
            accusantium.</span
          >
        </p>
        <Chart
          type="pie"
          :data="chartData"
          :options="chartOptions"
          class="md:w-[500px] h-full"
        />
      </div>
    </div>
  </div>
</template>
//TODO: change bg
<style scoped>
.Chart {
  margin: 20px 0px 20px 0;
  align-items: center;
}

.main {
  background-image: url("/library.webp");
}
</style>
