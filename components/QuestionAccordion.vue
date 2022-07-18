<template>
  <div class="accordion accordion-flushborder border-gray-primary rounded-2px" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header font-semibold text-lg md:text-xl lg:text-xxl" id="flush-headingOne">
            <button class="accordion-button font-semibold text-lg md:text-xl lg:text-xxl collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body pt-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header font-semibold text-lg md:text-xl lg:text-xxl" id="flush-headingTwo">
            <button class="accordion-button font-semibold text-lg md:text-xl lg:text-xxl collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body pt-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header font-semibold text-lg md:text-xl lg:text-xxl" id="flush-headingThree">
            <button class="accordion-button font-semibold text-lg md:text-xl lg:text-xxl collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body pt-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "QuestionAccordion",

    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin: "anonymous"}
      ],

      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' },
      ],
    },
}
</script>

<style scoped>
.accordion-body {
    padding-top: 0;
}
.accordion-button:not(.collapsed)::after {
    background-image: url('../assets/icons/arrowDown.png');
    transform: rotate(-180deg);
}

.accordion-button::after {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    margin-left: auto;
    content: "";
    background-image: url('../assets/icons/arrowDown.png');
    background-repeat: no-repeat;
    background-size: 2rem;
    transition: transform .2s ease-in-out;
}
.accordion-button:focus {
    z-index: 3;
    outline: none;
    border: none;
    box-shadow: none;
}
.accordion-button:not(.collapsed) {
    color: #171717;
    background-color: transparent;
    box-shadow: none;
}
</style>