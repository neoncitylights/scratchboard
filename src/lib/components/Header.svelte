<script lang="ts">
  import { page } from '$app/stores'
  import { SignIn, SignOut } from '@auth/sveltekit/components'
</script>

<header>
  <div class="signedInStatus">
    <div class="nojs-show loaded">
      {#if $page.data.session}
        <span>
          {$page.data.session.user?.email ?? $page.data.session.user?.name}
        </span>
        <SignOut>
          <div slot="submitButton">Sign out</div>
        </SignOut>
      {:else}
        <span>You are not signed in</span>
        <SignIn>
          <div>Sign in</div>
        </SignIn>
      {/if}
    </div>
  </div>
  <nav>
    <ul class="navItems">
      <li class="navItem"><a href="/editor">Editor</a></li>
    </ul>
  </nav>
</header>
