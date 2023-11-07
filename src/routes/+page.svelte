<script>
	import { store } from '../hooks/auth';
</script>
<div class="header sticky">
	{ `$store: ${$store}` }
	{#if $store != null }
		<a href="/user/logout">logout</a>
	{:else }
		<a href="/user/login">login</a>
	{/if}
	<h2>
  
  </h2>
</div>

<style type="text/css">
	.header {
	  background: #555;
	  color: #f1f1f1;
	}

	.sticky {
		padding: 20px;
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%
	}

	.sticky + .content {
	  padding-top: 102px;
	}
</style>