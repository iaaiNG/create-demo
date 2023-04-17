<template>
  <div id="root">
    <div id="sidebar">
      <h1>React Router Contacts</h1>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden="{true}"></div>
          <div className="sr-only" aria-live="polite"></div>
        </form>
      </div>
      <nav>
        <ul>
          <li v-for="item in $router.options.routes" :key="item.path">
            <a @click="$router.replace(item.path)">{{ item.path }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="detail">
      <router-view></router-view>
    </div>
  </div>
</template>