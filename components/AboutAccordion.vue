<template>
  <vsa-list class="list">
    <!-- Here you can use v-for to loop through items  -->
    <vsa-item>
      <vsa-heading>How Much Does it Cost to Make an App?</vsa-heading>
      <vsa-content
        >“Not all apps are created equal” - says the ‘Declaration of
        Techdependence’. The type of web and mobile app will determine the
        complexity of the solution and the number of hours required for its
        development process. In IT the industry standard on paying people is
        measured in hourly rates cost of which varies anywhere from $20 to
        $200/hour.</vsa-content
      >
    </vsa-item>
    <vsa-item>
      <vsa-heading>What are the main steps to building an app?</vsa-heading>
      <vsa-content
        >“Not all apps are created equal” - says the ‘Declaration of
        Techdependence’. The type of web and mobile app will determine the
        complexity of the solution and the number of hours required for its
        development process. In IT the industry standard on paying people is
        measured in hourly rates cost of which varies anywhere from $20 to
        $200/hour.</vsa-content
      >
    </vsa-item>
    <vsa-item>
      <vsa-heading
        >What is the main difference between a website and a web
        app?</vsa-heading
      >
      <vsa-content
        >“Not all apps are created equal” - says the ‘Declaration of
        Techdependence’. The type of web and mobile app will determine the
        complexity of the solution and the number of hours required for its
        development process. In IT the industry standard on paying people is
        measured in hourly rates cost of which varies anywhere from $20 to
        $200/hour.</vsa-content
      >
    </vsa-item>
    <vsa-item>
      <vsa-heading>What Is Mobile App Development Services?</vsa-heading>
      <vsa-content
        >“Not all apps are created equal” - says the ‘Declaration of
        Techdependence’. The type of web and mobile app will determine the
        complexity of the solution and the number of hours required for its
        development process. In IT the industry standard on paying people is
        measured in hourly rates cost of which varies anywhere from $20 to
        $200/hour.</vsa-content
      >
    </vsa-item>
  </vsa-list>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon,
} from 'vue-simple-accordion'
import 'vue-simple-accordion/dist/vue-simple-accordion.css'

export default {
  name: 'AboutAccordionCard',
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
  },
}
</script>

<style>
.list {
  max-width: 100%;
  transition: all 2s ease-in-out;
}
.vsa-item--is-active .vsa-item__heading,
.vsa-item:not(:last-of-type) {
  border-bottom: none;
  transition: all 2s ease-in-out;
}

.vsa-item__content {
  opacity: 1;
  padding-top: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
  background-color: #f4f4f4;
}
.vsa-item__trigger__content {
  text-align: start;
  font-weight: 600;
  font-size: 32px;
  color: #171717;
}

.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  outline: none !important;
  background-color: #f4f4f4;
  color: black !important;
}

.vsa-item__trigger[aria-expanded='true']
  .vsa-item__trigger__icon--is-default:before {
  left: 32px !important;
}

.vsa-item__trigger[aria-expanded='true']
  .vsa-item__trigger__icon--is-default:after {
  left: 27px !important;
}

.vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:before,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before {
  background-color: black !important;
}

.vsa-item__trigger__icon--is-default:before {
  left: 31px !important;
}
.vsa-item__trigger {
  align-items: flex-start;
  padding: 25px 30px !important;
}

.vsa-item__trigger__icon--is-default {
  min-width: 40px !important;
}

.vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger__icon--is-default:before {
  width: 15px;
}

@media screen and (max-width: 1024px) {
  .vsa-item__trigger {
    align-items: flex-start;
    padding: 20px 25px !important;
  }
  .vsa-item__trigger__content {
    font-size: 26px;
  }
  .vsa-item__content {
    padding: 0 25px;
  }
}

@media screen and (max-width: 768px) {
  .vsa-item__trigger {
    align-items: flex-start;
    padding: 15px 20px !important;
  }
  .vsa-item__trigger__content {
    font-size: 20px;
  }
  .vsa-item__content {
    padding: 0 20px;
  }
}
</style>
