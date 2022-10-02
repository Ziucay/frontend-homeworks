<script>
    import Fact from './Fact.svelte';
    import Telegram from './Telegram.svelte';
</script>

<div class="column col-xl-2 col-lg-3 col-md-6 col-xs-12">
    <div class="blurred" style="flex-direction: column; align-items: center">
        <img src="../../images/face.png" alt="avatar" style="height: 15em; width: 15em; justify-content: center">
        <Telegram/>
        <Fact/>
    </div>
</div>