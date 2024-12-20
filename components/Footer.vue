<template>
  <footer class="relative bottom-0 py-2 text-white bg-gray-900">
    <div class="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
      <!-- About Section -->
      <div>
        <h3 class="mb-4 font-serif text-xl font-bold">About Us</h3>
        <p class="font-mono text-gray-400">
          Welcome to our library! We offer a wide range of books across various
          genres. Explore, read, and discover your next favorite book.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="mb-4 font-serif text-xl font-bold">Quick Links</h3>
        <ul class="space-y-2 font-mono">
          <li>
            <a href="/home" class="font-mono text-gray-400 hover:text-white"
              >Home</a
            >
          </li>
          <li>
            <a href="/books" class="font-mono text-gray-400 hover:text-white"
              >Books</a
            >
          </li>
          <li>
            <a href="/about" class="font-mono text-gray-400 hover:text-white"
              >About</a
            >
          </li>
          <li>
            <a href="/contact" class="font-mono text-gray-400 hover:text-white"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="mb-4 font-serif text-xl font-bold">Contact Us</h3>
        <p class="text-gray-400">
          Email:
          <a href="mailto:info@library.com" class="font-mono hover:text-white"
            >info@library.com</a
          >
        </p>
        <p class="text-gray-400">
          Phone:
          <a href="tel:+123456789" class="font-mono hover:text-white"
            >+123 456 789</a
          >
        </p>
        <div class="flex mt-4 space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="text-2xl pi pi-facebook"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="text-2xl pi pi-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="text-2xl pi pi-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-8 font-mono text-center text-gray-500">
      <p>&copy; 2024 Prime. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
/* You can add custom styles here if needed */
</style>
