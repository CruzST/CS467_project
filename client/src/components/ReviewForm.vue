<template>
  <b-form @submit.prevent="handleSubmit(formData)">
    <b-form-group label="Title:">
      <b-input
        placeholder="Title of Review"
        :value="titlePlaceholder"
        v-model="formData.title"
        required
      />
    </b-form-group>

    <div>
      <span>Your Rating: &nbsp;&nbsp;</span>
      <font-awesome-icon
        v-for="n in 5"
        :icon="getIconType(n)"
        :key="'ws'+n"
        @mouseover="hoverOverStarIndex = n"
        @mouseleave="hoverOverStarIndex = null"
        @click="formData.rating = n"
      />
    </div>
    <br>
    <b-textarea
      placeholder="What did you think of this product?"
      :value="descriptionPlaceholder"
      rows="5"
      v-model="formData.description"
    />
    <br>

    <b-form-group label="Photo Upload">
      <b-form-file
        @change="addFiles"
        multiple
        :placeholder="fileInputMessage"
        drop-placeholder="Drop file here..."
        accept="image/*"
      >
        <template slot="file-name">{{fileInputMessage}}</template>
      </b-form-file>

      <div v-if="formData.images" style="margin-top:5px">
        <b-badge v-for="n in formData.images.length" :key="n" variant="dark">
          <div v-if="formData.images[n-1]">
            <span>{{formData.images[n-1] | getName}} &nbsp;</span>
            <font-awesome-icon icon="times" @click="handleDeleteFile(n-1)"/>
          </div>
        </b-badge>
      </div>
    </b-form-group>

    <b-button type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import { timeout } from "q";
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      hoverOverStarIndex: null,
      formData: {
        title: "",
        description: "",
        rating: null,
        images: []
      }
    };
  },
  props: {
    handleSubmit: Function,
    placeholder: Object
  },
  created: function() {
    if (this.placeholder) {
      //console.log("placeholder found")
      this.formData = { ...this.formData, ...this.placeholder };
      // sever connection between this.formData.images and this.placeholder.images?
      // (prevents the 404 when the not-yet-submitted image can't be loaded by the server)
      if (this.formData.images === null) {
        this.formData.images = [];
      } else {
        this.formData.images = [...this.placeholder.images];
      }
    }
  },
  beforeUpdate: function() {},
  // we're fetching pathnames (strings)
  filters: {
    getName(image) {
      //console.log(image);
      if (image.name) {
        return image.name;
      } else {
        return image;
      }
    }
  },
  computed: {
    numWholeStars() {
      if (this.hoverOverStarIndex) {
        return this.hoverOverStarIndex;
      }
      if (this.formData.rating) {
        return this.formData.rating;
      }
      if (this.placeholder) {
        return this.placeholder.rating;
      } else {
        return 0;
      }
    },
    numEmptyStars() {
      if (!this.formData.rating) {
        return 5;
      }
      return 5 - this.numWholeStars;
    },
    numFiles() {
      return this.formData.images.length;
    },
    fileInputMessage() {
      if (this.numFiles === 1) {
        return this.numFiles + " file selected...";
      }
      return this.numFiles + " files selected...";
    },
    titlePlaceholder() {
      if (this.placeholder) {
        return this.placeholder.title || "Review Title...";
      }
      return "Review Title...";
    },
    descriptionPlaceholder() {
      if (this.placeholder) {
        return this.placeholder.description;
      }
      return "";
    }
  },
  methods: {
    getIconType(n) {
      if (n <= this.numWholeStars) {
        return "star";
      } else {
        return ["far", "star"];
      }
    },
    handleDeleteFile(index) {
      this.formData.images.splice(index, 1);
    },
    addFiles(e) {
      for (var i = 0; i < e.target.files.length; i++) {
        this.formData.images.push(e.target.files[i]);
      }
    }
  }
};
</script>

<style>
</style>
