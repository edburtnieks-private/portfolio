import CMS from "netlify-cms";

// https://github.com/ryanfiller/portfolio-gatsby-v2/blob/master/src/helpers/index.js#L13
const fishAttr = (string, attr) => {
  const regex = new RegExp(`${attr}="(.*?)"`);
  const match = string.match(regex);
  return match ? match[1] : "";
};

// Add custom editor component for image with class attribute
// https://github.com/ryanfiller/portfolio-gatsby-v2/blob/master/src/cms/editor/image.js
CMS.registerEditorComponent({
  id: "customImage",
  label: "Custom image",
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
      media_library: {
        allow_multiple: false
      }
    },
    {
      label: "Alt Text",
      name: "alt"
    },
    {
      label: "Title",
      name: "title"
    },
    {
      label: "Style class",
      name: "styleClass"
    }
  ],
  pattern: /<img(.*)/,
  fromBlock: (match) => {
    const string = match[0];

    const obj = {
      src: fishAttr(string, "src"),
      alt: fishAttr(string, "alt"),
      title: fishAttr(string, "title"),
      styleClass: fishAttr(string, "class")
    };

    return obj;
  },
  toBlock: ({ src, alt, title, styleClass }) => {
    return `<img src="${src}" alt="${alt}" title="${title}" class="${styleClass}" />`;
  },
  toPreview: ({ src, alt, title, styleClass }) => {
    return `<img src="${src}" alt="${alt}" title="${title}" class="${styleClass}" />`;
  }
});
