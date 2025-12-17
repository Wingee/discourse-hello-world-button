import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",

    initialize() {
        withPluginApi("1.8.0", api => {

            // Add a button after the post-controls container
            api.decorateWidget("post-menu:after", helper => {
                return helper.h(
                    "button.hello-world-button",
                    {
                        onclick() {
                            alert("HELLO WORLD FROM ENGWEI! 🎉");
                        },
                        title: "Click me"
                    },
                    "HELLO WORLD"
                );
            });

        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");
    }
};
