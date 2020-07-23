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
          :class="{error: errors.name, valid: valid.name}"
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
          :class="{error: errors.email, valid: valid.email}"
          v-model="formData.email"
          @input="onChange"
          @blur="onChange"
          @invalid.prevent
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
        :class="{error: errors.message, valid: valid.message}"
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
      valid: {},
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
    onChange(event) {
      const { name: field, value, validity } = event.target;
      const { message, isValid } = this.validateInput(
        field,
        value,
        validity.valid
      );

      if (!isValid) {
        this.$set(this.errors, field, message);
      }

      if (isValid) {
        this.$delete(this.errors, field);
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
    validateInput(field, value, valid = true) {
      let message = "";
      let isValid = true;

      if (value === "") {
        message = `Please enter your ${field}`;
        isValid = false;
        
        if (this.valid[field]) this.valid[field] = false;
      }

      if (field === "email" && !valid && value !== "") {
        message = "Please enter a valid email";
        isValid = false;

        if (this.valid[field]) this.valid[field] = false;
      }

      if (isValid) this.valid[field] = true;

      return {
        message,
        isValid,
      };
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
  transition: border-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: var(--c-primary);
    transition: border-color 0.2s ease-in-out;
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

  &.error,
  &:invalid {
    border-color: var(--c-error);
    box-shadow: none;
    transition: border-color 0.2s ease-in-out;
  }

  &.valid {
    border-color: var(--c-success);
    transition: border-color 0.2s ease-in-out;
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
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  width: 100%;

  &:hover,
  &:focus {
    background-color: var(--c-light);
    border-color: var(--c-light);
    color: var(--c-dark);
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
  }

  &.sent {
    background-color: var(--c-success);
    border-color: var(--c-success);
    color: var(--c-light);
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
  }

  &.loading {
    background-color: var(--c-primary-dark);
    border-color: var(--c-primary-dark);
    color: var(--c-light);
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
  }

  &.error {
    background-color: var(--c-error-dark);
    border-color: var(--c-error-dark);
    color: var(--c-light);
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
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
