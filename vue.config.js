module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/global_styles/mixin.scss";
                `,
            },
        },
    },
};
