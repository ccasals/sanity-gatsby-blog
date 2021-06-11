export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c37f6185ce9354c8e46b15",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1pn7g775",
                  apiId: "5bb135d6-5e6c-4f8b-b1c5-25f061c0e9dd",
                },
                {
                  buildHookId: "60c37f61cf79306b5b773521",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-22fd5wxn",
                  apiId: "aca5bcd3-87fc-4da8-bd43-6a9a84270fc0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ccasals/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-22fd5wxn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
