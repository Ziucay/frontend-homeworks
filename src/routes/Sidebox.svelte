<script>
	import Telegram from './Telegram.svelte';
	import face from '$lib/images/face.png';
</script>

<div class="column col-xl-2 col-lg-3 col-md-6 col-xs-12">
	<div class="blurred">
		<div style="flex-direction: column; align-items: center; padding: 2em">
			<img src={face} alt="avatar" style="height: 15em; width: 15em; justify-content: center" />
			<Telegram />
			<a href="/about" style="padding: 0.5em 0">About</a>
			<a href="/fact" style="padding: 0.5em 0">Random math facts</a>
		</div>
	</div>
</div>
