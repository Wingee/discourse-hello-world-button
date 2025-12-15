import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",

    initialize() {
        withPluginApi("1.8.0", api => {

            // Append a button after the topic footer buttons
            api.decorateWidget("topic-footer-buttons:after", helper => {
                return helper.h("button.hello-world-button", {
                    onclick() {
                        alert("HELLO WORLD FROM ENGWEI! 🎉");
                    }
                }, "HELLO WORLD");
            });

        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");
    }
};
