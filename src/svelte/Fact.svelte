<script lang="ts">

    async function getRandomFact() {
        let response = await fetch("http://numbersapi.com/random/math")
        let data: string = await (await response.text())

        return `
                Here's a fact for you! <br>
                ${data} <br>
                `
    }

</script>

{#await getRandomFact()}
    <p>Waiting for a fact...</p>
{:then data}
    <p>{@html data}</p>
{:catch error}
    <p>An error occurred!</p>
{/await}

