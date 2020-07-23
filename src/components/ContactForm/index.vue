<template>
  <form
    name="contact"
    class="form"
    method="POST"
    v-on:submit.prevent="handleSubmit"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />

    <p hidden>
      <label>
        Don’t fill this out:
        <input name="bot-field" />
      </label>
    </p>

    <div class="info">
      <div class="info-part">
        <label for="name" class="label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="input text-input"
          :class="{error: errors.name}"
          v-model="formData.name"
          @input="onChange"
          @blur="onChange"
        />
        <small v-if="errors.name" v-text="errors.name" class="error-message" />
      </div>

      <div class="info-part">
        <label for="email" class="label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="input text-input"
          :class="{error: errors.email}"
          v-model="formData.email"
          @input="onChange"
          @blur="onChange"
        />
        <small v-if="errors.email" v-text="errors.email" class="error-message" />
      </div>
    </div>

    <div class="message-wrapper">
      <label for="message" class="label">Message</label>
      <textarea
        name="message"
        id="message"
        rows="5"
        cols="30"
        class="input textarea"
        :class="{error: errors.message}"
        v-model="formData.message"
        @input="onChange"
        @blur="onChange"
      ></textarea>
      <small v-if="errors.message" v-text="errors.message" class="error-message" />
    </div>

    <div class="submit-button-wrapper">
      <button
        type="submit"
        class="submit-button"
        :class="{ sent: isDone, loading: isLoading, error: isError }"
        :disabled="isError || isDone ||isLoading"
      >
        <span v-if="isError">
          <CrossIcon />Error
        </span>

        <span v-else-if="isDone">
          <CheckIcon />Message sent!
        </span>

        <span v-else-if="isLoading">
          <LoaderIcon />Sending
        </span>

        <span v-else>
          <SendIcon />Send a message
        </span>
      </button>
    </div>
  </form>
</template>

<script>
import CrossIcon from "~/assets/icons/Cross";
import CheckIcon from "~/assets/icons/Check";
import LoaderIcon from "~/assets/icons/Loader";
import SendIcon from "~/assets/icons/Send";

export default {
  components: {
    CrossIcon,
    CheckIcon,
    LoaderIcon,
    SendIcon,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isLoading: false,
      isDone: false,
      isError: false,
      errors: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    async handleSubmit(event) {
      const { errors, isValid } = this.validateForm(this.formData);

      if (!isValid) {
        this.errors = errors;
      } else {
        this.isLoading = true;

        try {
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": event.target.getAttribute("name"),
              ...this.formData,
            }),
          });

          this.isLoading = false;
          this.isDone = true;
        } catch (error) {
          this.isError = true;
          this.isLoading = false;
          this.isDone = false;

          console.error("Error while submitting the form: ", error);
        }
      }
    },
    validateForm(data) {
      let errors = {};
      let isValid = true;

      for (const [key, value] of Object.entries(data)) {
        const { message, isValid: isInputValid } = this.validateInput(
          key,
          value
        );

        if (!isInputValid) {
          errors[key] = message;
        }
      }

      if (Object.keys(errors).length > 0) isValid = false;

      return {
        errors,
        isValid,
      };
    },
    validateInput(field, value) {
      let message = "";
      let isValid = true;

      if (value === "") {
        message = `Please enter your ${field}`;
        isValid = false;
      }

      return {
        message,
        isValid,
      };
    },
    onChange(event) {
      const { name: field, value } = event.target;
      const { message, isValid } = this.validateInput(field, value);

      if (!this.errors[field] && !isValid) {
        this.$set(this.errors, field, message);
      }

      if (this.errors[field] && isValid) {
        this.$delete(this.errors, field);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  color: var(--c-light);
  font-size: 1.25rem;
  letter-spacing: 1px;
}

.info,
.message-wrapper {
  margin-bottom: 2.5rem;
}

.info {
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
}

.info-part,
.input {
  width: 100%;
}

.info-part {
  &:first-of-type {
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 4rem;
    }
  }
}

.label {
  display: block;
  margin-bottom: 0.75rem;
}

.input {
  background-color: var(--c-dark);
  border: 1px solid var(--c-light);
  border-radius: 0.25rem;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  outline: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: border-color 0.1s ease-in;

  &:hover,
  &:focus {
    border-color: var(--c-primary);
    transition: border-color 0.1s ease-out;
  }

  &.text-input {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  &.textarea {
    padding-bottom: 1rem;
    padding-top: 1rem;
    resize: none;
  }

  &.error {
    border-color: var(--c-error);
  }
}

.error-message {
  color: var(--c-error);
  display: inline-block;
  margin-top: 0.5rem;
}

.submit-button-wrapper {
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
}

.submit-button {
  background-color: var(--c-primary-dark);
  border: 2px solid var(--c-primary-dark);
  border-radius: 0.25rem;
  color: var(--c-light);
  font-weight: var(--fw-bold);
  outline: 0;
  padding: 1rem 0;
  transition: background-color 0.1s ease-in, color 0.1s ease-in,
    border-color 0.1s ease-in;
  width: 100%;

  &:hover,
  &:focus {
    background-color: var(--c-light);
    border-color: var(--c-light);
    color: var(--c-dark);
    transition: background-color 0.1s ease-out, color 0.1s ease-out,
      border-color 0.1s ease-out;
  }

  &.sent {
    background-color: var(--c-success);
    border-color: var(--c-success);
    color: var(--c-light);
    transition: background-color 0.2s ease-out, color 0.1s ease-out,
      border-color 0.1s ease-out;
  }

  &.loading {
    background-color: var(--c-primary-dark);
    border-color: var(--c-primary-dark);
    color: var(--c-light);
    transition: background-color 0.2s ease-out, color 0.1s ease-out,
      border-color 0.1s ease-out;
  }

  &.error {
    background-color: var(--c-error-dark);
    border-color: var(--c-error-dark);
    color: var(--c-light);
    transition: background-color 0.2s ease-out, color 0.1s ease-out,
      border-color 0.1s ease-out;
  }

  span {
    align-items: center;
    display: flex;
    justify-content: center;

    svg {
      margin-right: 1rem;
    }
  }

  @media (min-width: 768px) {
    min-width: 390px;
    width: auto;
  }
}
</style>
