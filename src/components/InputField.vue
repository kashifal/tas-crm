<template>
  <div>
    <div class="form-group">
        <input type="text" class="form-control px-2 py-4 transition w-full block" id="usr" required>
        <label for="usr">password</label>
      </div>
  </div>
</template>

<script setup>

</script>

<style  scoped>

.form-group>label {
  bottom: 34px;
  left: 15px;
  position: relative;
  background-color: white;
  padding: 0px 5px 0px 5px;
  font-size: 1.1em;
  transition: 0.2s;
  pointer-events: none;
}

.form-control:focus~label {
  bottom: 55px;
}

.form-control:valid~label {
  bottom: 55px;
}
.transition{
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.transition[data-v-7a7a37b1] {
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
 
.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
 
.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}
 
.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
 
.w-full {
    width: 100%;
}
 
.block {
    display: block;
}
.pb-3, .py-3 {
    padding-bottom: 1rem!important;
}
.pt-3, .py-3 {
    padding-top: 1rem!important;
}
.pl-2, .px-2 {
    padding-left: 0.5rem!important;
}
.pr-2, .px-2 {
    padding-right: 0.5rem!important;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
 
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}
</style>