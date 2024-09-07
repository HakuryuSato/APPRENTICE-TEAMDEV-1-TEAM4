<div class="header">
    <div class="total" id="">累計勉強時間</div>
    <div class="total timer" id="total-timer" name="totaltimer">00:00</div>
</div>

<style>
    .header {
        height: max(4rem, 10vh);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }

    .total {
        padding: 0 1.5rem;
    }

    @media screen and (max-width: 600px) {
        .header {
            font-size: 1.25rem;
        }

        .total {
            padding: 0 1rem;
        }
    }
</style>